export const serverInternalError = {
    error: 'server-internal-error',
    description: 'There has been an internal error in the server.',
    detail: {
        apologize: 'Sorry we are trying to solve the problem.',
        actions: 'Try later!.',
    },
};

export function endPointNotFound(route, method) {
    return {
        error: 'end-point-not-found',
        description: 'End point you trying to access not found.',
        detail: {
            route,
            method,
        },
    };
}
