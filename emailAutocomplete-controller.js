/*
* Email Autocomplete
*
* Author : Roberta Vendramini Gonçalves
* Created on: 07/24/2019
*
*/

({  
    //function to diplay the suggested email to the user
    keyCheck : function(component, event, helper) {
        var domains = ["yahoo.com" ,"hotmail.com" ,"gmail.com" ,"me.com"];
        var filteredValue = [];
        var control = false;
        var str_arr = component.get('v.email');
        //split the emails in two parts - before the '@' and after the '@'
        var split_arr = str_arr.split("@",2);
        //do the logic only if there is anything after the '@'
        if(split_arr[1]){
            var letter_arr = split_arr[1].split("");
            //check all domains to see if any matches the beginning of the email domain typed by the user
            for(var i = 0; i < domains.length; i++){
                var domains_size = domains[i].split("");
                // check that the domain string has equal or more letters than the one typed by the user
                if(domains_size.length >= letter_arr.length){
                    //compare the domain strings
                    if(domains[i].substring(0, letter_arr.length) === split_arr[1].substring(0, letter_arr.length)){
                        filteredValue.push(split_arr[0] + '@' + domains[i]); 
                    }
                    component.set('v.predictions', filteredValue);
                }
            }
        }
    },
    
    //function to set the selected email suggestion to the input field
    getEmailDetails : function(component, event, helper) {
        var selectedItem = event.currentTarget;
        var placeid = selectedItem.dataset.placeid;
        component.set('v.email',placeid);	
        component.set('v.predictions',[]); 
    }
})