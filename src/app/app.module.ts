import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtModule } from "@auth0/angular-jwt";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TruncateModule } from "@yellowspot/ng-truncate";
import { SimpleNotificationsModule } from "angular2-notifications";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxStripeModule } from "ngx-stripe";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard-page/dashboard.component";
import { AddEducationComponent } from "./dashboard-page/components/education/add-education/add-education.component";
import { EditEducationComponent } from "./dashboard-page/components/education/edit-education/edit-education.component";
import { AddExperienceComponent } from "./dashboard-page/components/experience/add-experience/add-experience.component";
import { EditExperienceComponent } from "./dashboard-page/components/experience/edit-experience/edit-experience.component";
import { FakeGithubPage } from "./github-page/github-page";
import { SectionsComponent } from "./home-page/components/sections/sections.component";
import { TestimonialsComponent } from "./home-page/components/testimonials/testimonials.component";
import { HomePage } from "./home-page/home-page";
import { HomePageService } from "./home-page/service/home-page.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DevelopersListComponent } from "./developerslist-page/developerslist-page";
import { FabComponent } from "./shared/components/fab/fab.component";
import { InfoModalComponent } from "./shared/components/fab/info-modal/info-modal.component";
import { SupporterModalComponent } from "./shared/components/fab/supporter-modal/supporter-modal.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { SessionExpiredComponent } from "./shared/components/session-expired/session-expired.component";
import { SignupComponent } from "./shared/components/signup/signup.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FakeService } from "./shared/services/api/fake.service";
import { GithubService } from "./shared/services/api/github.service";
import { AuthGuard } from "./shared/services/auth/auth-guard.service";
import { AuthService } from "./shared/services/auth/auth.service";
import { EditProfileComponent } from "./dashboard-page/components/edit-profile/edit-profile.component";
import { ProfileComponent } from "./userprofile/userprofile.component";
import { SessionExpiredPage } from "./expired-page/expired-page";
import { SkillsComponent } from "./dashboard-page/components/skills/skills.component";
import { ThankYouModalComponent } from "./shared/components/fab/thank-you-modal/thank-you-modal.component";
import { EducationComponent } from "./userprofile/components/education/education.component";
import { ExperienceComponent } from "./userprofile/components/experience/experience.component";
import { GithubComponent } from "./userprofile/components/github/github.component";
import { SocialIconsComponent } from "./userprofile/components/social-icons/social-icons.component";
import { DonationsMobileViewComponent } from "./dashboard-page/components/donations-mobile-view/donations-mobile-view.component";
import { EducationMobileViewComponent } from "./dashboard-page/components/education/education-mobile-view/education-mobile-view.component";
import { ExperienceMobileViewComponent } from "./dashboard-page/components/experience/experience-mobile-view/experience-mobile-view.component";
import { AppRoutingModule } from ".//app-routing.module";



@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavbarComponent,
		DashboardComponent,
		ProfileComponent,
		LoginComponent,
		HomePage,
		DevelopersListComponent,
		PageNotFoundComponent,
		SignupComponent,
		AddEducationComponent,
		EditEducationComponent,
		EditExperienceComponent,
		AddExperienceComponent,
		EditProfileComponent,
		FabComponent,
		SupporterModalComponent,
		InfoModalComponent,
		TestimonialsComponent,
		SectionsComponent,
		FakeGithubPage,
		SessionExpiredComponent,
		SessionExpiredPage,
		SkillsComponent,
		ThankYouModalComponent,
		EducationComponent,
		ExperienceComponent,
		GithubComponent,
		SocialIconsComponent,
		DonationsMobileViewComponent,
		EducationMobileViewComponent,
		ExperienceMobileViewComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgbModule.forRoot(),
		AppRoutingModule,
		CommonModule,
		NgxSpinnerModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		TruncateModule,
		NgxStripeModule.forRoot(environment.publish_api_key),
		SimpleNotificationsModule.forRoot({
			position: ["top", "right"],
			timeOut: 5000,
			showProgressBar: true,
			clickToClose: true,
			pauseOnHover: true
		}),
		JwtModule.forRoot({
			config: {
				tokenGetter: getToken,
				whitelistedDomains: ["localhost:8000", "backend.devhangout.co", "devhangout.herokuapp.com"],
				blacklistedRoutes: ["localhost:8000/api/token", "backend.devhangout.co/api/token", "devhangout.herokuapp.com/api/token"]
			}
		}),
		Ng2SearchPipeModule,
		InfiniteScrollModule,
		ScrollToModule.forRoot(),
	],
	providers: [FakeService, GithubService, AuthService, AuthGuard, HomePageService],
	bootstrap: [AppComponent]
})
export class AppModule {}

/**
 *  Helper function to get the token from localStorage
 */
export function getToken() {
	return localStorage.getItem("token");
}
