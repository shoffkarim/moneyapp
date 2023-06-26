import React, { useState, useCallback } from "react"
import { icons } from "components/utils/icons"
import { IconsPopup } from "components/popups/iconsPopup"
import { PopupButtonStyled, PopupCloseButtonStyled, PopupContainerStyled, PopupFormContainerStyled, PopupFormStyled, PopupIconStyled, PopupOverlayStyled, PopupStyled, PopupWrapperStyled } from "../popup.styled"
import CloseIcon from '@mui/icons-material/Close'
import { SubmitHandler, useForm } from "react-hook-form"
import { getPopupTitle, SetCard } from "../utils"
import { PopupInput } from "../popupInput"
import { PopupColors } from "../popupColors"
import { SET_ACCOUNT, SET_EXPENSE, SET_INCOME } from "__data__/mutations/cards"
import { useMutation } from "@apollo/client"
import { IMainIconObj } from "types"
import { ACCOUNTS, INCOMES, colorsArray } from "components/constants"
import { Typography } from "@mui/material"
import { closeCreatePoup } from "__data__/reducers/createPopup"
import { useAppDispatch, useAppSelector } from "hooks"
import { RootState } from "__data__/store"
import { openSuccessAlert } from "__data__/reducers/alerts"
import { GET_USER_CARDS } from "__data__/queries/cards"
import { GET_USER_TOTAL } from "__data__/queries/total"


export const CreatePopup: React.FC = () => {

  const dispatch = useAppDispatch()

  const { open, type } = useAppSelector((state: RootState) => state.createPopup)

  const title = getPopupTitle('create', type)
  const { control, handleSubmit, formState: { errors }, reset } = useForm<SetCard>()

  const [activeColor, setActiveColor] = useState(colorsArray[0])
  const [activeIcon, setActiveIcon] = useState("bank")
  const [visibleIcons, setVisibleIcons] = useState(false)
  const MainIcon: IMainIconObj = icons(activeIcon)

  const [setIncome] = useMutation(SET_INCOME)
  const [setAccount] = useMutation(SET_ACCOUNT)
  const [setExpense] = useMutation(SET_EXPENSE)

  const getTypeCard = useCallback(() => {
    if(type === INCOMES) {
      return setIncome
    }
    if(type === ACCOUNTS) {
      return setAccount
    }
    return setExpense
  }, [type])

  const handleClose = () => {
    dispatch(closeCreatePoup())
  }
  console.log(errors)
  const handleOnSubmit: SubmitHandler<SetCard> = (data) => {
    try {
      const setCard = getTypeCard()

      setCard(
        {
          variables: {
            id: '647db351529d7960cb8ce476',
            name: data.name,
            icon: data.icon,
            color: data.color,
            value: Number(data.value)
          },
          refetchQueries: [
            {
              query: GET_USER_CARDS,
              variables: {
                id: '647db351529d7960cb8ce476'
              }
            },
            {
              query: GET_USER_TOTAL,
              variables: {
                id: '647db351529d7960cb8ce476'
              }
            },
          ]
        },
      ).then(() => {
        handleClose()
        dispatch(openSuccessAlert({
          open: true,
          text: 'Card has been created'
        }))
        reset()
      })
    } catch (error) {
      console.log(errors)
    }
  }

  return (
    open ?
      <PopupStyled onSubmit={handleSubmit(handleOnSubmit)}>
        <PopupOverlayStyled/>
        <PopupContainerStyled>
          <PopupCloseButtonStyled aria-label="close" onClick={() => handleClose()}>
            <CloseIcon htmlColor="#fff" fontSize='large' />
          </PopupCloseButtonStyled>
          <PopupFormStyled>
            {title &&
            <Typography
              variant="h5"
              component="h2"
              textAlign="center"
              marginBottom="20px"
            >{title}</Typography>
            }
            <PopupFormContainerStyled>
              <PopupIconStyled
                style={{ backgroundColor: activeColor }}
                onClick={() => setVisibleIcons(!visibleIcons)}
              >
                <MainIcon.Icon size="50px" color="white" />
              </PopupIconStyled>
              <PopupWrapperStyled>
                <PopupInput
                  control={control}
                  name="name"
                  label="Name"
                />
                <PopupInput
                  defaultValue={"0"}
                  control={control}
                  pattern={/^\d+$/}
                  name="value"
                  label="Value"
                />
                <PopupColors
                  setActiveColor={setActiveColor}
                  control={control}
                  activeColor={activeColor}
                  name="color"
                  groupName="create-popup-colors"
                />
              </PopupWrapperStyled>
            </PopupFormContainerStyled>
            <PopupButtonStyled variant="contained" type="submit">Create</PopupButtonStyled>
          </PopupFormStyled>

        </PopupContainerStyled>
        <IconsPopup
          visible={visibleIcons}
          activeIcon={activeIcon}
          changeIcon={setActiveIcon}
          control={control}
          groupName="create-popup-icons"
        />
      </PopupStyled>
      : null

  )
}
