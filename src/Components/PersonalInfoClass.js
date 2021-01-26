import React from 'react';
import { Formik, FormikProps,  Field, ErrorMessage ,useFormik} from 'formik';

class PersonalInfoClass extends React.Component
{
    constructor()
    {
        super();
        this.state = {firstName:'',lastName:'',phoneNo:'',email:'',confirmemail:'',isSubmited:false,isEmail:false}        
    }

    render()
    {
        const personalInfo = yup.object({
            firstName: yup.string().required('Please enter first name').max(50),
            lastName:yup.string().required('Please enter last name').max(50),
            email: yup.string().required('Please enter email id').email('Pleae enter valid email id'),
            confirmemail:yup.string().required('Please enter email id').email('Please enter valid confirm email id'),
            mobileNo: yup.number('Mobile number should be number').required('Please enter Mobile No').min(10,'Please enter 10 digit'),
            
          });
        return (
            <div>
                <Formik 
                validationSchema={personalInfo}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email:'',
                    confirmemail:'',
                    mobileNo:''
                }}
               // validate={(values)=>this.validatorReact(values)}
                onSubmit= { (values)=>
                    console.log(JSON.stringify(values))
                }
                 
                render={
                    
                    () =>{
                        return(
                            <Form>
                               
                            <Field type="text" name="firstName" placeholder="First Name"/>
                            <ErrorMessage name="firstName" />
                            <Field type="text" name="lastName" placeholder="Last Name" />
                            <ErrorMessage name="lastName" />
                            <Field type="text" name="email" placeholder="Email ID" />
                            <ErrorMessage name="email" />
                            <Field type="text" name="confirmemail" placeholder="Confirm Email ID" />
                            <ErrorMessage name="confirmemail" />
                            <Field type="text" name="mobileNo" placeholder="Phone No" />
                            <ErrorMessage name="mobileNo" />
                            <button type="submit" >  
                                Submit Form
                            </button>
                            </Form>
                        )
                    }
                }
                > 
               </Formik>
            </div>
        );
    }
}
export default PersonalInfoClass;