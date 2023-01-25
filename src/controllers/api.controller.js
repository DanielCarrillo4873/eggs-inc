export function apiInfoController(req, res) {
    res.json({
        title: 'eggs-inc-api',
        version: '1',
        description: 'Eggs Inc. REST API',
    });
}
