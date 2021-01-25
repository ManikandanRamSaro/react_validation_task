export default class EventHelper 
{
    constructor()
    {

    }

    getValueByLastindex(inputtext,type)
    {
        let lastValue = false;
        var numRegex = /^[0-9]*$/;  
        var charRegex = /^[a-zA-Z]*$/;
        var emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputtext.length>0)
        {  

            if(type==='STRING')
            {
                let output=inputtext.match(charRegex); 
                if(output!=null)
                {
                    lastValue=true;
                } 
            }
            else if(type==='NUMBER')
            {    
                let output=inputtext.match(numRegex);
                if(output!=null)
                {
                    lastValue=true;
                } 
            }
            else if(type==='EMAIL')
            {
                let output=inputtext.match(emailRegex);
                if(output!=null)
                {
                    lastValue=true;
                } 
            }
        }
     
        return lastValue;
    } 

    validateInput(typeofObject,value,compare,objectName,objcode,maxlength)
    { 
        // True for Error Response 
        // False for Success Response
        let output = { status:'',message:'',type:typeofObject,ip:value,parent:'' }
        if(value.length===0)
        {
            output = { status:true,message:`Please Enter ${objectName}`,type:typeofObject,ip:value,parent:objcode }
        }
        else if(typeofObject==='COMPARE_EMAIL')
        {
            let emails = objectName.split('-');
            let emailOne = this.getValueByLastindex(value,'EMAIL');            
            let emailTwo = this.getValueByLastindex(compare,'EMAIL');
            if(emailOne===false && emailTwo===false)
            {
                output = { status:true,message:`Invalid both ${objectName}`,type:typeofObject,ip:value,parent:objcode } 
            }
            else if(emailOne===false && emailTwo===true)
            {
                output = { status:true,message:`Invalid ${emails[0]}`,type:typeofObject,ip:value,parent:objcode } 
            }
            else if(emailOne===true && emailTwo=== false)
            {                
                output = { status:true,message:`Invalid ${emails[1]}`,type:typeofObject,ip:value,parent:objcode } 
            }
            else
            {
                if(value==compare)
                {
                    output = { status:false,message:`Valid ${objectName}`,type:typeofObject,ip:value,parent:objcode }
                }
                else
                {
                    output = { status:true,message:'Confirm Email is not same as Email',type:typeofObject,ip:value,parent:objcode } 
                } 
            }
        }
        else
        {
            let status = this.getValueByLastindex(value,typeofObject);
            let maxSize=false;
              
                if(value.length==maxlength)
                {
                    maxSize=true;
                }  
 
                if(maxlength===0)
                {
                    if(status===false)
                    {
                        output = { status:true,message:`Invalid ${objectName}`,type:typeofObject,ip:value,parent:objcode }
                    }
                    else
                    {
                        output = { status:false,message:`Valid ${objectName}`,type:typeofObject,ip:value,parent:objcode }
                    }   
                }
                else
                {
                    if(status===false && maxSize===false)
                    {
                        output = { status:true,message:`Invalid ${objectName} and maximum length not reached`,type:typeofObject,ip:value,parent:objcode }
                    }
                    else if(status===false && maxSize===true)
                    {
                        output = { status:true,message:`Invalid ${objectName}`,type:typeofObject,ip:value,parent:objcode }
                    }
                    else if(status===true && maxSize===false)
                    {
                        output = { status:true,message:`Maximum length not reached for ${objectName}`,type:typeofObject,ip:value,parent:objcode }
                    }
                    else
                    {
                        output = { status:false,message:`Valid ${objectName}`,type:typeofObject,ip:value,parent:objcode }
                    }   
                }
                 
            
        }
        return output;
    }

}
