paypal.Buttons({
    createOrder: function(data, actions) {
        // Configurar a transação
        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: 'USD', // Altere para a moeda desejada
                    value: getTotalPrice(cart) // Usar o valor total do carrinho
                }
            }]
        });
    },


    
    
    onApprove: function(data, actions) {
        // Capturar a transação
        return actions.order.capture().then(function(details) {
            // Transação concluída com sucesso
            console.log('Pagamento realizado com sucesso!');
            console.log(details);
        });
    },
    onError: function(err) {
        // Lidar com erros durante a transação
        console.error('Ocorreu um erro durante o pagamento:', err);
    }
}).render('#paypal-button-container');