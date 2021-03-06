import { AUTH_ERROR, PRIVATEMESSAGES, USERSTATUS } from "../actions/types"

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  messages: [],
  status: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action
  // console.log(payload)
  switch (type) {
    case PRIVATEMESSAGES:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        messages: payload,
      }

    case USERSTATUS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        status: payload,
      }

    case AUTH_ERROR:
      localStorage.removeItem("token")
      return { ...state, token: null, isAuthenticated: false, loading: false }
    default:
      return state
  }
}
