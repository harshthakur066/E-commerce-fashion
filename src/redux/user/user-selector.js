import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const SelectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);