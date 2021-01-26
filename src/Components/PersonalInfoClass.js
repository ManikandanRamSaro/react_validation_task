import React from 'react';
import { Formik,Form} from 'formik';
import * as yup from 'yup';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helper from '../Helper/EventsHelper'; 

class PersonalInfoClass extends React.Component
{
    constructor()
    {
        super();
        this.state = {fnErr:'',lnErr:'',phnErr:'',emErr:'',cemErr:'',isSubmited:false,isEmail:false}        
    }

   
    checkData = (keyname,type,variable) =>{  
        this.SuccessStatus(false);
        if(keyname.length>0)
        {
            const validation = new Helper();
            let output=validation.getValueByLastindex(keyname,type); 
            if(output===false)
            {
                if(variable==='FN') 
                {
                    this.setState({fnErr:'Numbers and Symbols are restricted'});
                } 
                else if(variable==='LN')
                {
                    this.setState({lnErr:'Numbers and Symbols are restricted'});
                } 
                else if(variable==='PH') // phone case only different
                {
                    this.setState({phnErr:''});
                } 
            }
            else
            {
                if(variable==='FN') 
                {
                    this.setState({fnErr:''});
                } 
                else if(variable==='LN')
                {
                    this.setState({lnErr:''});
                } 
                else if(variable==='PH')
                {
                    this.setState({phnErr:'Only Numbers are allowed'});
                } 
            }
        }  
    }
    emailDiv = (values) =>{
        this.SuccessStatus(false);
        let counts=values.length;
        if(counts>0)
        {
            this.setState({isEmail:true})
        }
        else
        {
            this.setState({isEmail:false})
        }
    }
    SuccessStatus(type)
    { 
        this.setState({isSubmited:type})
    }
    render()
    {
        const personalInfo = yup.object({
            firstName: yup.string().required('Please enter first name').max(50,'Please enter only 50 digit of First Name'),
            lastName:yup.string().required('Please enter last name').max(50,'Please enter only 50 digit of First Name'),
            email: yup.string().required('Please enter email id').email('Pleae enter valid email id'),
            confirmemail:yup.string().required('Please enter email id').email('Please enter valid confirm email id').oneOf([yup.ref('email'), null],'Confirm Email ID not same as Email ID'),
            mobileNo: yup.string().required('Please enter Mobile No').min(10, 'Please enter 10 digit of Mobile No').max(10,'Mobile number should be 10 digit')
            
          });
        return (
            <div className="w3-container"> 
            <div className="w3-display-middle">
             <div className="login-wrapper" >
                <div className="box">
                <div className="w3-panel form-layout"> 
                <Formik
                    validationSchema={personalInfo}
                    onSubmit={ (values)=>{this.SuccessStatus(true)}}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email:'',
                        confirmemail:'',
                        mobileNo:''
                    }}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                helperText={touched.firstName ? errors.firstName : ""}
                                error={touched.firstName && Boolean(errors.firstName)}
                                label="First Name"
                                value={values.firstName}
                                onChange={handleChange} 
                                onKeyUp={e=>this.checkData(values.firstName,'STRING','FN')}
                                fullWidth
                                /> 
                                {   this.state.fnErr.length!==0 ? <small className="text-error w3-tiny">{this.state.fnErr}</small>:null}
                                 <TextField
                                id="lastName"
                                name="lastName"
                                helperText={touched.lastName ? errors.lastName : ""}
                                error={touched.lastName && Boolean(errors.lastName)}
                                label="Last Name"
                                value={values.lastName}
                                onChange={handleChange}
                                onKeyUp={e=>this.checkData(values.lastName,'STRING','LN')}
                                fullWidth
                                />
                                 {   this.state.lnErr.length!==0 ? <small className="text-error w3-tiny">{this.state.lnErr}</small>:null}
                                 <TextField
                                id="email"
                                name="email"
                                helperText={touched.email ? errors.email : ""}
                                error={touched.email && Boolean(errors.email)}
                                label="Email ID"
                                value={values.email}
                                onChange={handleChange}
                                onKeyUp={e=>this.emailDiv(values.email)}
                                fullWidth
                                />
                                { this.state.isEmail ? 
                                    <TextField
                                id="confirmemail"
                                name="confirmemail"
                                helperText={touched.confirmemail ? errors.confirmemail : ""}
                                error={touched.confirmemail && Boolean(errors.confirmemail)}
                                label="Confirm Email ID"
                                value={values.confirmemail}
                                onChange={handleChange}                                
                                onKeyUp={e=>this.SuccessStatus(false)}
                                fullWidth
                                />
                                :null }
                                 <TextField
                                id="mobileNo"
                                name="mobileNo"
                                helperText={touched.mobileNo ? errors.mobileNo : ""}
                                error={touched.mobileNo && Boolean(errors.mobileNo)}
                                label="Phone no"
                                type="number"
                                value={values.mobileNo}
                                onChange={handleChange}
                                onKeyUp={e=>this.checkData(values.mobileNo,'NUMBER','PH')}
                                fullWidth
                                />
                                 {   this.state.phnErr.length!==0 ? <small className="text-error w3-tiny">{this.state.phnErr}</small>:null}
                                 <br/><br/>
                                {
                                    this.state.isSubmited ? <p className="text-success w3-center">  You have submitted your personal information </p>:null
                                }
                                 <Button variant="contained" size="large" color="primary" type="submit" className=" w3-block w3-round-xxlarge">Submit</Button>
                        </Form>
                        )}
                        </Formik>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
        );
    }
}
export default PersonalInfoClass;