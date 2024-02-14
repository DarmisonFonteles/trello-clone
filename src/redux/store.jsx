import React from 'react';
import configureStore from '@reduxjs/toolkit';
import ticketSlice from './tickets/ticketSlice';

export const store = configureStore({
  reducer: {
    ticket: ticketSlice,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks', JSON.stringify(state.ticket.tickets));
});

export const RootState = typeof store.getState;
export const AppDispatch = typeof store.dispatch;