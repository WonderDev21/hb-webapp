const stateOffline = JSON.parse(localStorage.getItem('nativo-digital'))

const initialState = {
  auth: {
    isLogged: false,
    authError: '',
    authSuccess: '',
    userId: '',
    firstname: '',
    invitation_success: '',
    invitation_failure: '',
    invitationsend: false
  },
  user: {
    role: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    age: '',
    email: '',
    country: '',
    institution: '',
    industry: '',
    image_url: '',
    url: '',
    editSuccess: false,
    invalidPaymentProfile: false,
    paymentProfile: [],
    cardErrorMessage: '',
    cardSuccessMessage: '',
    wrongPurchase: false,
    successPurchase: false,
    langSet: false,
    codeVerified: false,
    codefailed: false
  }
}

const state = stateOffline ? stateOffline : initialState

export default state
