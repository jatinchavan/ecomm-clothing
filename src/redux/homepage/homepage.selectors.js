import {createSelector} from "reselect";

const selectHomepage = state => state.homepage;

export const selectHomepageSections = createSelector(selectHomepage, (homepage) => homepage.sections);
