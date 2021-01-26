
import React,{useState}  from 'react';
import '../Styles/App.css'

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Helper from '../Helper/EventsHelper'; 
//import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
const PersonalInfo = () =>{

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [confirmEmail,setConfirmEmail] = useState('');
    const [phoneNo,setPhoneNo] = useState('');

    const [isEmail,setIsEmail] = useState(false);

    const [isSubmitted,setIsSubmitted] = useState(false);    
    const [isSubmitStatus,setIsSubmitStatus] = useState({status:false,message:''});

    const [fNameval,setFNameval] = useState({status:false,message:'',css:''});
    const [lNameval,setLNameval] = useState({status:false,message:'',css:''});
    const [emailval,setEmailval] = useState({status:false,message:'',css:''});
    const [cemailval,setCEmailval] = useState({status:false,message:'',css:''});
    const [phoneval,setPhoneval] = useState({status:false,message:'',css:''});   
 
    let arrayofStatus = [];
    const onSubmitting = (e) =>
    {
        e.preventDefault();  
        let FormLists = [{type:'STRING',value:firstName,cmp:'',text:'First Name',part:'FN',maxlen:0},{type:'STRING',value:lastName,cmp:'',text:'Last Name',part:'LN',maxlen:0},{type:'NUMBER',value:phoneNo,cmp:'',text:'Phone No',part:'PN',maxlen:10},{type:'EMAIL',value:email,cmp:'',text:'Email ID',part:'EM',maxlen:0},{type:'EMAIL',value:confirmEmail,cmp:'',text:'Confirm Email ID',part:'CEM',maxlen:0},{type:'COMPARE_EMAIL',value:email,cmp:confirmEmail,text:'Email ID - Confirm Email ID',part:'CMP',maxlen:0}]
        arrayofStatus=[];
        FormLists.forEach(ele => {
            const supportClass = new Helper();
            let output = supportClass.validateInput(ele.type,ele.value,ele.cmp,ele.text,ele.part,ele.maxlen);             
            if(output.status===false)
            { 
                arrayofStatus.push(output.status)
            } 
            mapTextboxToVariables(output.parent,'','',output.message,output.status,'VALIDATE');
        });
        setIsSubmitStatus({status:false,message:''});
        if(arrayofStatus.length===6)
        {
            setIsSubmitStatus({status:true,message:'You have submitted your personal information'});
        }
       setIsSubmitted(true);
    };

    const mapTextboxToVariables = (type,event,maxlen,msg,status,casetype) => {
        setIsSubmitStatus({status:false,message:''});
        const supportClass = new Helper();
            
            if(type=== 'FN')
                 {
                     if(casetype==='NORMAL')    
                     {
                        let input = supportClass.getValueByLastindex(event.target.value,'STRING') 
                        if(input===true && event.target.value.length<=maxlen){
                            
                            setFirstName(event.target.value);
                            setFNameval({status:false,message:'',css:''}); 
                        } 
                        else if(input===false && firstName.length===1)
                        {
                            setFirstName('');                
                            setFNameval({status:true,message:'First Name Required',css:''}); 
                        }
                     }
                     else
                     {                         
                        setFNameval({status:status,message:msg,css:''}); 
                     }
                 }
            else if(type=== 'LN')
                {
                    if(casetype==='NORMAL')    
                    {
                        let input = supportClass.getValueByLastindex(event.target.value,'STRING') 
                        if(input===true && event.target.value.length<=maxlen){
                            
                            setLastName(event.target.value);                
                            setLNameval({status:false,message:'',css:''}); 
                        } 
                        else if(input===false && lastName.length===1)
                        {
                            setLastName('');                
                            setLNameval({status:true,message:'Last Name Required',css:''}); 
                        } 
                    }
                    else
                    {                         
                        setLNameval({status:status,message:msg,css:''}); 
                    }
                }
                else if(type=== 'PN')
                    {
                        if(casetype==='NORMAL')    
                        {
                           
                            let input = supportClass.getValueByLastindex(event.target.value,'NUMBER') 
                            if(input===true && event.target.value.length<=maxlen){ 
                                setPhoneNo(event.target.value);    
                                if(event.target.value.length===maxlen) {
                                    setPhoneval({status:false,message:'',css:''}); 
                                }
                                else
                                {
                                    setPhoneval({status:true,message:'Please enter 10 digit of mobile number',css:''}); 
                                }
                            } 
                            else if(input===false && phoneNo.length===1)
                            { 
                                setPhoneNo('');                
                                setPhoneval({status:true,message:'Phone Number Required',css:''}); 
                            } 
                        }
                        else
                        {                         
                            setPhoneval({status:status,message:msg,css:''}); 
                        }
                    }
                    else if(type=== 'EM')
                   {
                       if(casetype==='NORMAL')    
                        {
                            if(event.target.value.length>0) 
                            {                
                                let input = supportClass.getValueByLastindex(event.target.value,'EMAIL') 
                                console.log(input);
                                setEmail(event.target.value);                
                                setIsEmail(true);
                                if(input===true)
                                {
                                    setEmailval({status:false,message:'',css:''}); 
                                }
                                else
                                {
                                    setEmailval({status:false,message:'Invalid Email Address',css:''}); 
                                }
                            }
                            else if(event.target.value.length===0)
                            {
                                
                                setEmail(event.target.value);         
                                setIsEmail(false);     
                                setConfirmEmail('');              
                                setEmailval({status:true,message:'Email Id reqired',css:''}); 
                            }
                            if(confirmEmail.length>5)
                            { 
                                mapTextboxToVariables('CMP','','','','','NORMAL');
                            }
                        }
                        else
                        {                         
                                setEmailval({status:status,message:msg,css:''}); 
                        }
                    }
                    else if(type=== 'CEM')
                        {
                            if(casetype==='NORMAL')    
                             {
                                if(event.target.value.length>0) 
                                    {                
                                        let input = supportClass.getValueByLastindex(event.target.value,'EMAIL')  
                                        setConfirmEmail(event.target.value);      
                                        if(input===true)
                                        {
                                            setCEmailval({status:false,message:'',css:''}); 
                                        }
                                        else
                                        {
                                            setCEmailval({status:true,message:'Invalid Confirm Email Address',css:''}); 
                                        }  
                                    }
                                    else if(event.target.value.length===0)
                                    { 
                                        setConfirmEmail(event.target.value);   
                                        
                                        setCEmailval({status:true,message:'Confirm Email Id reqired',css:''}); 
                                    }
                             }
                             else
                             {                         
                                setCEmailval({status:status,message:msg,css:''}); 
                             }
                         }
                         else if(type=== 'CMP')
                         {
                             console.log(msg)
                            if(casetype==='NORMAL')    
                            {
                                let email1 = document.getElementById('txtEmail').value || '';
                                let conEmail = document.getElementById('txtConfirmEmail').value || ''; 
                                let output = supportClass.validateInput('COMPARE_EMAIL',email1,conEmail,'Email ID - Confirm Email ID','CMP',0); 
                                setCEmailval({status:output.status,message:output.msg,css:''})
                            }
                            else
                            {
                                setCEmailval({status:status,message:msg,css:''})
                            }
                         } 

       
    };
  
    return (
        <div className="w3-container"> 
            <div className="w3-display-middle">
             <div className="login-wrapper" >
                <div className="box">
                <div className="w3-panel form-layout" >
                    <form autoComplete="off" onSubmit={e=>{onSubmitting(e)}} >
                    
                       <TextField 
                            name="txtFirstName" 
                            id="txtFirstName" 
                            value={firstName} 
                            onChange={e=>{mapTextboxToVariables('FN',e,50,'','','NORMAL')}}
                            label="First Name"  
                            error={fNameval.status}
                            className="w3-block"
                            InputProps={{ 
                                endAdornment: isSubmitStatus && fNameval.status ?  <InputAdornment position="end"><ClearIcon color="error"/></InputAdornment> :  null,
                              }}
                            placeholder="Please Enter First Name"/>
                        { isSubmitted && fNameval.status ? <small className="text-error w3-tiny">{fNameval.message}</small>:null}
                        <br/>
                       <TextField 
                            name="txtLastName" 
                            id="txtLastName"  
                            value={lastName}
                            onChange={e=>{mapTextboxToVariables('LN',e,50,'','','NORMAL')}}
                            label="Last Name" 
                            error={lNameval.status}
                            className="w3-block"
                            InputProps={{ 
                                endAdornment: isSubmitStatus && lNameval.status ?  <InputAdornment position="end"><ClearIcon color="error"/></InputAdornment> : null,
                              }}
                            placeholder="Please Enter Last Name"/>                            
                       { isSubmitted && lNameval.status ? <small className="text-error w3-tiny">{lNameval.message}</small>:null}
                        <br/>
                        <TextField 
                            name="txtEmail" 
                            id="txtEmail"
                            label="Email ID"
                            value={email}
                            onChange={e=>{mapTextboxToVariables('EM',e,0,'','','NORMAL')}}                             
                            error={emailval.status}
                            className="w3-block"
                            InputProps={{ 
                                endAdornment: isSubmitStatus && emailval.status ?  <InputAdornment position="end"><ClearIcon color="error"/></InputAdornment> : null,
                              }}
                            placeholder="Please Enter Email"/>
                              { isSubmitted && emailval.status ?<small className="text-error w3-tiny">{ emailval.message}</small>:null}
                        <br/>
                        {
                            isEmail ? 
                            <div>
                            <TextField 
                            name="txtConfirmEmail" 
                            id="txtConfirmEmail" 
                            label="Confirm Email ID" 
                            value={confirmEmail}
                            onChange={e=>{mapTextboxToVariables('CEM',e,0,'','','NORMAL')}} 
                            error={cemailval.status}
                            className="w3-block"
                            InputProps={{ 
                                endAdornment: isSubmitStatus && isEmail.status ?  <InputAdornment position="end"><ClearIcon color="error"/></InputAdornment> :  null,
                              }}
                            placeholder="Please Enter Confirm Email"/>
                            { isSubmitted && isEmail && cemailval.status ? <small className="text-error w3-tiny">{cemailval.message}</small>:null}
                            <br/></div>
                            
                            :null
                        }
                         
                        
                        <TextField 
                            name="txtPhoneNo" 
                            id="txtPhoneNo" 
                            value={phoneNo}
                            onChange={e=>{mapTextboxToVariables('PN',e,10,'','','NORMAL')}} 
                            label="Phone no" 
                            className="w3-block"
                            error={phoneval.status}
                            InputProps={{ 
                                endAdornment: isSubmitStatus && phoneval.status ?   <InputAdornment position="end"><ClearIcon color="error"/></InputAdornment> : null, 
                              }}
                            placeholder="Please Enter Phone Number"/>
                             {/* <InputAdornment position="end"><DoneIcon style={{color:'green'}} color="primary"/></InputAdornment> */}
                            { isSubmitted && phoneval.status ? <small className="text-error w3-tiny">{phoneval.message}</small>:null}
                        <br/><br/>
                        {
                            isSubmitStatus.status ? <p className="text-success w3-center"> { isSubmitStatus.message} </p>:null
                        }
                        <Button  variant="contained" size="large" color="primary" type="submit" className=" w3-block w3-round-xxlarge">Submit</Button>
                        <br/><br/>
                    </form>
             

                </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default PersonalInfo; 