            // first-class ticket start

            document.getElementById('firstclasstkt-increase').addEventListener('click', function(){
                handleFirstClassTicketCounting(true)
           })
           document.getElementById('firstclasstkt-decrease').addEventListener('click', function(){
            handleFirstClassTicketCounting(false)
           })
           function handleFirstClassTicketCounting(isIncrease){
            const ticketInput = document.getElementById('firstclasstkt-count');
            const firstTktCount = parseInt(ticketInput.value)
            let firstTktNewCount = firstTktCount;
            if(isIncrease == true){
                firstTktNewCount = firstTktCount + 1;
            }
            if(isIncrease == false && firstTktCount > 0){
                firstTktNewCount = firstTktCount - 1; 
            }
            ticketInput.value = firstTktNewCount;
            calculateTotal()
           }
       
    
                 //economy-ticket start
    
    
    document.getElementById('economytkt-increase').addEventListener('click', function(){
        handleEconomyTicketCounting(true)
           })
           document.getElementById('economytkt-decrease').addEventListener('click', function(){
            handleEconomyTicketCounting(false)
           })
           function handleEconomyTicketCounting(isIncrease){
            const ticketInput = document.getElementById('economytkt-count');
            const economyTktCount = parseInt(ticketInput.value)
            let economyTktNewCount = economyTktCount;
            if(isIncrease == true){
                economyTktNewCount = economyTktCount + 1;
            }
            if(isIncrease == false && economyTktCount > 0){
                economyTktNewCount = economyTktCount - 1; 
            }
            ticketInput.value = economyTktNewCount;
            calculateTotal()
           }
             function calculateTotal(){
               const firstClassTktInput = document.getElementById('firstclasstkt-count')
               const firstClassTktCount = parseInt(firstClassTktInput.value);
    
               const economyTktInput = document.getElementById('economytkt-count')
               const economyTktCount = parseInt(economyTktInput.value);
               const subTotalPrice = firstClassTktCount * 150 + economyTktCount * 100;
               document.getElementById('sub-total').innerText = '$' + subTotalPrice;
               const tax = subTotalPrice * 0.1;
               
               document.getElementById('tex-amount').innerText = '$' + tax;
               const total = subTotalPrice + tax;
               document.getElementById('total').innerText = '$' + total;
             }
             document.getElementById('confirm').addEventListener('click', function(){
               
                    alert('We received your Confirmation');
                    
             })