//having an atribute "data-double-value where  in every call of the function i store the newvalue that i get as the sum of the old value 
//plus the increment which i get as target/speed. This value is decimal, but i need to save the decimal for the next call of the function 
//and i decided to save to e new attribute. Then i search the floor because when the number is decimal I need to show only the number before the point
//and that number i get as a floor. i show the floored value, which now is clear without decimals in the inner text of the 
//element with class .counter, but for the next recursive call of the function I got the decimal value for every counter element stored in the attribute
//which i use to calculate the increment for the next step till i reach the target 
const DATA_DOUBLE_VALUE_ATTRIBUTE = 'data-double-value';
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.getAttribute(DATA_DOUBLE_VALUE_ATTRIBUTE);         
        const inc = (target / speed);

        if(count < target) {
            const newValue = count + inc;
            counter.setAttribute(DATA_DOUBLE_VALUE_ATTRIBUTE, newValue);
            counter.innerText = Math.floor(newValue);
            
            setTimeout(updateCount, 1); 
            console.log(count);
        }
    }
    updateCount(); 
    
});


