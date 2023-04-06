import * as Yup from 'yup'

 const userSignUpSecam=Yup.object({
  name:Yup.string().min(3).max(60).required("Please Enter Youre Name"),
  email:Yup.string().email().required("Please Enter Email"),
  phone:Yup.string().min(10).max(10).required("Please Enter Phone Number"),
  pwd:Yup.string().min(4).max(10).required("Youre Password Min 4 Chareacter or Maximum 10"),
  cpwd:Yup.string().required("Conform Password Must be match Password").oneOf([Yup.ref('pwd'),null],'Password Note  Match'),
  // file:Yup.string().required("Please Select Youre Profile Photo"),
})

export default userSignUpSecam