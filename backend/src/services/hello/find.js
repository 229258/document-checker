/** @format */

export default (queryId) => {
  const addToQueryString = queryId + 55;
  const addToQueryInt = parseInt(queryId) + 55;
  /**
   * This will show id or argument passed in query, i.e 1 or "some"
   */
  return { passedQueryId: queryId, addToQueryString, addToQueryInt };
};
