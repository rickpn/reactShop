export const formatPrice = cents => {

    return (cents).toLocaleString('zh', {
        style: 'currency',
        currency: 'JPY'

    });
};
