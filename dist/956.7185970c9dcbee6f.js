"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[956],{8956:(c,d,i)=>{i.r(d),i.d(d,{RegisterModule:()=>m});var u=i(2019),r=i(433),e=i(4650),g=i(1927);const l=[{path:"",component:(()=>{class t{constructor(o,a,n){this.authService=o,this.router=a,this.fbRegister=n,this.register=r.cw}ngOnInit(){this.register=this.fbRegister.group({emailRegister:["",[r.kI.required,r.kI.email]],pwdRegister:["",r.kI.required]})}onCreate(o){this.authService.createUser({email:o.emailRegister,password:o.pwdRegister,returnSecureToken:!0}).subscribe(a=>{console.log("CREATE USER: ",a)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.e),e.Y36(u.F0),e.Y36(r.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:28,vars:1,consts:[[1,"bg-gray-50","dark:bg-gray-900"],[1,"flex","flex-col","items-center","justify-center","px-6","py-8","mx-auto","md:h-screen","lg:py-0"],["href","#",1,"flex","items-center","mb-6","text-2xl","font-semibold","text-gray-900","dark:text-white"],["src","https://electronicssoftware.net/wp-content/uploads/lol-icon.png","alt","logo",1,"w-20","h-20","mr-2"],[1,"w-full","bg-white","rounded-lg","shadow","dark:border","md:mt-0","sm:max-w-md","xl:p-0","dark:bg-gray-800","dark:border-gray-700"],[1,"p-6","space-y-4","md:space-y-6","sm:p-8"],[1,"text-xl","font-bold","leading-tight","tracking-tight","text-gray-900","md:text-2xl","dark:text-white"],[1,"space-y-4","md:space-y-6",3,"formGroup"],["for","email",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","emailRegister","type","email","name","email","id","email","placeholder","name@company.com","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","password","name","password","id","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["for","confirm-password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","pwdRegister","type","password","name","confirm-password","id","confirm-password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","submit",1,"w-full","text-white","bg-blue-600","hover:bg-primary-700","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800",3,"click"],[1,"text-sm","font-light","text-gray-500","dark:text-gray-400"],["href","#",1,"font-medium","text-primary-600","hover:underline","dark:text-primary-500"]],template:function(o,a){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e._uU(4," League Of Legends "),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"h1",6),e._uU(8," Create and account "),e.qZA(),e.TgZ(9,"form",7)(10,"div")(11,"label",8),e._uU(12,"Your email"),e.qZA(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div")(15,"label",10),e._uU(16,"Password"),e.qZA(),e._UZ(17,"input",11),e.qZA(),e.TgZ(18,"div")(19,"label",12),e._uU(20,"Confirm password"),e.qZA(),e._UZ(21,"input",13),e.qZA(),e.TgZ(22,"button",14),e.NdJ("click",function(){return a.onCreate(a.register.value)}),e._uU(23,"Create an account"),e.qZA(),e.TgZ(24,"p",15),e._uU(25," Already have an account? "),e.TgZ(26,"a",16),e._uU(27,"Login here"),e.qZA()()()()()()()),2&o&&(e.xp6(9),e.Q6J("formGroup",a.register))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(l),r.UX]}),t})()}}]);