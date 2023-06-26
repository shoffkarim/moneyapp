import { IMainIconObj } from "types"
import React, { useCallback, useState } from "react"
import { icons } from "components/utils/icons"
import { useAppDispatch, useAppSelector } from "hooks"
import { RootState } from "__data__/store"
import { changeColor, changeIcon, closeEditPopup } from "__data__/reducers/editPopup"
import { PopupButtonStyled, PopupCloseButtonStyled, PopupContainerStyled, PopupFormContainerStyled, PopupFormStyled, PopupIconStyled, PopupOverlayStyled, PopupStyled, PopupWrapperStyled } from "../popup.styled"
import { Typography } from "@mui/material"
import { PopupInput } from "../popupInput"
import { PopupColors } from "../popupColors"
import { IconsPopup } from "../iconsPopup"
import CloseIcon from '@mui/icons-material/Close'
import { getPopupTitle, EditCard } from "../utils"
import { SubmitHandler, useForm } from "react-hook-form"
import { UPDATE_ACCOUNT, UPDATE_EXPENSE, UPDATE_INCOME } from "__data__/mutations/cards"
import { useMutation } from "@apollo/client"
import { ACCOUNTS, INCOMES } from "components/constants"

export const EditPopup: React.FC = () => {

  const dispatch = useAppDispatch()

  const { open, id, iconName, color, name, value, type } = useAppSelector((state: RootState) => state.editPopup)

  console.log(name)
  const title = getPopupTitle('edit', type)
  const { control, handleSubmit, formState: { errors }, reset } = useForm<EditCard>()

  const [visibleIcons, setVisibleIcons] = useState(false)
  const MainIcon: IMainIconObj = icons(iconName)

  const handleChangeIcon = (icon: string) => {
    dispatch(changeIcon(icon))
  }

  const handleChangeColor = (color: string) => {
    dispatch(changeColor(color))
  }


  const [updateAccount] = useMutation(UPDATE_ACCOUNT)
  const [updateIncome] = useMutation(UPDATE_INCOME)
  const [updateExpense] = useMutation(UPDATE_EXPENSE)

  const getTypeCard = useCallback(() => {
    if(type === INCOMES) {
      return updateIncome
    }
    if(type === ACCOUNTS) {
      return updateAccount
    }
    return updateExpense
  }, [type])

  const handleOnSubmit: SubmitHandler<EditCard> = (data) => {
    const updateCard = getTypeCard()
    updateCard({
      variables: {
        id: '647db351529d7960cb8ce476',
        idCard: id,
        name: data.name,
        icon: data.icon,
        color: data.color,
        value: Number(data.value)
      }
    }).then(() => {
      dispatch(closeEditPopup())
      reset()
    })
  }

  const handleClose = () => {
    dispatch(closeEditPopup())
  }

  return (
    open ?
      <PopupStyled onSubmit={handleSubmit(handleOnSubmit)}>
        <PopupOverlayStyled/>
        <PopupContainerStyled>
          <PopupCloseButtonStyled
            aria-label="close"
            onClick={() => handleClose()}
          >
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
                style={{ backgroundColor: color }}
                onClick={() => setVisibleIcons(!visibleIcons)}
              >
                <MainIcon.Icon
                  size="50px"
                  color="white"
                />
              </PopupIconStyled>
              <PopupWrapperStyled>
                <PopupInput
                  control={control}
                  name="name"
                  label="Name"
                  defaultValue={name}
                />
                <PopupInput
                  control={control}
                  name="value"
                  label="Value"
                  defaultValue={value}
                />
                <PopupColors
                  setActiveColor={handleChangeColor}
                  control={control}
                  activeColor={color}
                  name="color"
                  groupName="create-popup-colors"
                />
              </PopupWrapperStyled>
            </PopupFormContainerStyled>
            <PopupButtonStyled variant="contained" type="submit">Edit</PopupButtonStyled>
          </PopupFormStyled>

        </PopupContainerStyled>
        <IconsPopup
          visible={visibleIcons}
          activeIcon={iconName}
          changeIcon={handleChangeIcon}
          control={control}
          groupName="create-popup-icons"
        />
      </PopupStyled>
      : null
  )
}
