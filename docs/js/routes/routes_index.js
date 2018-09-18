var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"HomePage","pathMatch":"full"},{"path":"login","component":"LoginComponent","pathMatch":"full"},{"path":"expired","component":"SessionExpiredComponent","pathMatch":"full"},{"path":"profiles","component":"DevelopersListComponent","pathMatch":"full"},{"path":"signup","component":"SignupComponent","pathMatch":"full"},{"path":"profile/:id/:username","component":"ProfileComponent","pathMatch":"full","canActivate":["AuthGuard"]},{"path":"profile/edit","component":"EditProfileComponent","canActivate":["AuthGuard"]},{"path":"dashboard","component":"DashboardComponent","canActivate":["AuthGuard"]},{"path":"donate","component":"SupporterModalComponent"},{"path":"donate/info","component":"InfoModalComponent"},{"path":"donate/thank-you","component":"ThankYouModalComponent"},{"path":"github/:username/:repo","component":"FakeGithubPage"},{"path":"education/add","component":"AddEducationComponent","canActivate":["AuthGuard"]},{"path":"education/edit/:id","component":"EditEducationComponent","canActivate":["AuthGuard"]},{"path":"experience/add","component":"AddExperienceComponent","canActivate":["AuthGuard"]},{"path":"experience/edit/:id","component":"EditExperienceComponent","canActivate":["AuthGuard"]},{"path":"skills/edit/:id","component":"SkillsComponent","canActivate":["AuthGuard"]},{"path":"session-expired","component":"SessionExpiredPage"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}
