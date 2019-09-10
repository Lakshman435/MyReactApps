export const CREATE_TICKET = 'CREATE_TICKET'

export const createTicket  = ticket =>({
    type:CREATE_TICKET,
    ticket
})

const createTicketReducer = (state=[],action) =>{
    return state;
}
export default createTicketReducer;