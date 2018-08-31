import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal, NgbCheckBox } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../services/data.service";
import { Education } from "../../../../shared/models/users";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: "app-edit-education",
	templateUrl: "./edit-education.component.html",
	styleUrls: ["./edit-education.component.scss"]
})
export class EditEducationComponent implements OnInit {
	id: number;
	education: Education;
	current: boolean;
	updatedForm: Education;

	editForm = new FormGroup({
		school: new FormControl("", Validators.required),
		degree: new FormControl("", Validators.required),
		fieldofstudy: new FormControl("", Validators.required),
		from: new FormControl("", Validators.required),
		to: new FormControl(),
		current: new FormControl(Validators.required),
	});

	constructor(public activeModal: NgbActiveModal, private dataService: DataService,private notify: NotificationsService) {}

	ngOnInit() {
		this.dataService.getDetailed("education", this.id).subscribe(
			(data: Education) => {
				this.education = data;
				this.editForm.patchValue({
					school: data.school,
					degree: data.qualification,
					fieldofstudy: data.fieldOfStudy,
					from: data.dateFrom,
					to: data.dateTo,
					current: data.current
				});
				console.log(data);
			},
			error => {
				console.log(error);
			},
			() => {
				this.onChanges();

			}
		);
	}
	onChanges() {
		this.editForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
			console.log(this.updatedForm);
		});
	}
	update() {
		this.dataService.updateDetails("education", this.id, this.updatedForm).subscribe(results => {
			console.log(results);
		}, error => {
			console.log(error)
			this.notify.error("Seems there was an issue ?", error);
		},() => {
			this.notify.success("Education Updated")
			this.activeModal.close();
		})
	}
}
