// action is the part that gets returned the actual part that gets executed is action creators
// has a type i.e a string any way to describe what happened, payload - any information that needs to be passed
export const selectUser = (user) => {
    console.log("You clicked on user", user.firstName);
    return {
            type:"USER_SELECTED",
            payload: user
    }
};