import { createSlice } from '@reduxjs/toolkit';
import { InicialColumns } from '../../components/itemstatus/variables';

const savedTickets = JSON.parse(localStorage.getItem('tasks') || '[]');

const initialState = {
  tickets: savedTickets.length > 0 ? savedTickets : InicialColumns,
};

const ticketSlice = createSlice({
  name: 'teste',
  initialState: initialState,
  reducers: {
    addTicket: (state, action) => {
      state.tickets[0].cards = [...state.tickets[0]?.cards, action.payload];
    },
    remodedItem: (state, action) => {
      state.tickets = state.tickets.map((item) => ({
        title: item.title,
        id: item.id,
        color: item.color,
        cards: item.cards.filter((task) => Number(task.id) !== Number(action.payload.id)),
      }));
    },
    addListTickets: (state, action) => {
      console.log('testes aqui');
      console.log(action.payload);
      state.tickets = [...action.payload];
    },
  },
});

export const { addTicket, addListTickets, remodedItem } = ticketSlice.actions;
export default ticketSlice.reducer;
