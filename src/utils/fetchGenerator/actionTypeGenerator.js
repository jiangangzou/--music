export default (pageName,moduleName) => {
    const ACTION_PREFIX = `${pageName}/${moduleName}_`
    return ({
        STRAT: ACTION_PREFIX + 'START',
        SUCCESS: ACTION_PREFIX + 'SUCCESS',
        FALURE: ACTION_PREFIX + 'FAILURE'
    })
}