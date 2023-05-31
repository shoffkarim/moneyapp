const ErrorHelperText = {
  email: {
    required: 'This field is required',
    pattern: 'Invalid Email'
  },
  password: {
    required: 'This field is required',
    pattern: 'Invalid Email'
  }
}

export const getErrorMessage = (field: string, type?: string) => {
  if(field === "email") {
    if(type === "pattern") {
      return 'Invalid Email'
    }
  }
  return 'This field is required'
}