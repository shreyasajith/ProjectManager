function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>about works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\r\n    <li class=\"breadcrumb-item active\">Dashboard</li>\r\n  </ol>\r\n</nav>\r\n<h5>Dashboard</h5>\r\n<h6>{{ToDay | date : \"d/M/y\"}}</h6>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-3 pb-3\" style=\"background-color:#e9e6e6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-11 text-white text-center mx-auto rounded pt-2 pb-2 font-weight-bold\"\r\n           style=\"background-color:#a39e9e; font-family:  'Arial Narrow Bold', sans-serif\">\r\n        {{Designation | uppercase}}\r\n      </div>\r\n      <div class=\"col-12 text-center mt-2\">\r\n        <img src=\"assets/user.png\" width=\"120px\">\r\n      </div>\r\n      <div class=\"col-12 text-center pt-2 pb-2 font-weight-bold\" style=\"font-family: Tahoma\">\r\n        {{Username | lowercase}}\r\n      </div>\r\n      <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family: Arial\">TEAM SUMMARY</div>\r\n      <div class=\"col-12 mb-3\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n            NO. OF TEAM MEMBERS\r\n            <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{NoOfTeamMembers}}</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n            TOTAL COST OF ALL PROJECTS\r\n            <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">$ {{TotalCostOfAllProjects}} k</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n            PENDING TASKS\r\n            <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{PendingTasks}}</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n            UPCOMING PROJECTS\r\n            <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{UpComingProjects | percent}}</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family: 'Arial Narrow'\">CLIENTS</div>\r\n      <div class=\"col-12\">\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\" *ngFor=\"let client of Clients\">{{client | slice: 0: 10}}</li>\r\n        </ul>\r\n        <!--{{TeamMembersSummary}}-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 pt-0 pb-2\" style=\"background-color:#e9e6e6\">\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-6 text-left\">\r\n            <div class=\"dropdown\">\r\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                      data-toggle=\"dropdown\">\r\n                Project A\r\n              </button>\r\n              <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let project of Projects\" onclick=\"return false\"\r\n                   (click)=\"onProjectChange($event)\">{{project}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6 text-right\">\r\n            <div class=\"dropdown\">\r\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                      data-toggle=\"dropdown\">\r\n                2019\r\n              </button>\r\n              <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let year of Years\">\r\n                  <span [ngSwitch]=\"year\">\r\n                    <span *ngSwitchCase=\" '2019' \" style=\"color:green\">{{year}}</span>\r\n                    <span *ngSwitchCase=\" '2018' \" style=\"color:blue\">{{year}}</span>\r\n                    <span *ngSwitchCase=\" '2017' \" style=\"color:red\">{{year}}</span>\r\n                    <span *ngSwitchDefault style=\"color:black\">{{year}}</span>\r\n                  </span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-auto rounded font-weight-bold\"\r\n           style=\"background-color: #718d97; font-family: 'Arial Narrow'\">PROJECT BRIEFING</div>\r\n      <div class=\"col-12\">\r\n        <table class=\"table table-borderless\">\r\n          <tr>\r\n            <td>Project Cost</td>\r\n            <td>{{ProjectCost | currency: \"INR\" }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Current Expenditure</td>\r\n            <td>{{CurrentExpenditure | currency: \"INR\"}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Available Funds</td>\r\n            <td>{{AvailableFunds | currency: \"INR\"}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-2 rounded font-weight-bold\"\r\n           style=\"background-color:#718d97; font-family: 'Arial Narrow'\">TEAM MEMBERS SUMMARY</div>\r\n      <div class=\"col-12\">\r\n        <table class=\"table\">\r\n          <tr>\r\n            <th>Region</th>\r\n            <th>Team Members Count</th>\r\n            <th>Temporarily Unavailable Members</th>\r\n          </tr>\r\n          <tr *ngFor=\"let teamMemberSumary of TeamMembersSummary\">\r\n            <td>\r\n              <b>{{teamMemberSumary.Region}}</b>\r\n            </td>\r\n            <td>\r\n              {{teamMemberSumary.TeamMembersCount}}\r\n            </td>\r\n            <td>\r\n              {{teamMemberSumary.TemporarilyUnavailableMembers}}\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3\" style=\"background-color:#e9e6e6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-11 mx-auto mt-1 text-white text-center pt-1 pb-2 mx-2 rounded font-weight-bold\"\r\n           style=\"background-color:#718d97; font-family: 'Arial Narrow'\">TEAM MEMBERS</div>\r\n      <div class=\"col-lg-12 pt-2\">\r\n        <div class=\"accordion\" id=\"accordion1\">\r\n          <div class=\"card\" *ngFor=\"let teamMembersGroup of TeamMembers; let i = index\">\r\n\r\n            <div class=\"card-header bg-secondary\" id=\"card1\">\r\n              <h2 class=\"mb-0\">\r\n                <button class=\"btn btn-link text-white\" type=\"button\" data-toggle=\"collapse\"\r\n                        [attr.data-target]=\" '#cardbody' + i \">\r\n                  {{teamMembersGroup.Region}}\r\n                </button>\r\n              </h2>\r\n            </div>\r\n            <div [id]=\" 'cardbody' + i \" class=\"collapse\" data-parent=\"#accordion1\" [ngClass]=\"(i == 0)? 'show': '' \">\r\n              <div class=\"card-body\">\r\n                <div *ngIf=\"i == 0; then firstTemplate; else secondTemplate\">\r\n                </div>\r\n                <ng-template #firstTemplate>\r\n                  <div class=\"card\" *ngFor=\"let member of teamMembersGroup.Members\">\r\n                    <div class=\"card-header bg-primary text-white\">#{{member.ID}} {{member.Name}}</div>\r\n                    <div class=\"card-body\">{{member.Status}}</div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template #secondTemplate>\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>ID</th>\r\n                        <th>Name</th>\r\n                        <th>Status</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let member of teamMembersGroup.Members\">\r\n                        <td>{{member.ID}}</td>\r\n                        <td [style.color]=\" (member.Status == 'Busy')? 'red': 'black' \">{{member.Name}}</td>\r\n                        <td>{{member.Status}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </ng-template>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMyProfileMyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>my-profile works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Projects</h1>\r\n<div class=\"row\">\r\n  <div class=\"col-8 mx-auto\">\r\n    <div class=\"form-group form-row\">\r\n      <label for=\"drpSearchBy\" class=\"col-form-label col-3\">Search:</label>\r\n      <div class=\"col-9\">\r\n        <select class=\"form-control\" id=\"drpSearchBy\" name=\"SearchBy\" [(ngModel)]=\"searchBy\">\r\n          <option value=\"ProjectID\">Project ID</option>\r\n          <option value=\"ProjectName\">Project Name</option>\r\n          <option value=\"DateOfStart\">Date of Start</option>\r\n          <option value=\"TeamSize\">Team Size</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group form-row\">\r\n      <label for=\"textSearchText\" class=\"col-form-label col-3\">Search:</label>\r\n      <div class=\"col-9\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" id=\"txtSearchText\" name=\"SearchText\" [(ngModel)]=\"searchText\">\r\n          <div class=\"input-group-append\" (click)=\"onSearchClick()\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-8 mx-auto\">\r\n    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#newModal\">Create Project</button>\r\n  </div>\r\n  <div class=\"col-8 mx-auto\">\r\n    <table class=\"table\">\r\n      <thead>\r\n      <th>Project ID</th>\r\n      <th>Project Name</th>\r\n      <th>Date of Start</th>\r\n      <th>Team Size</th>\r\n      <th>Actions</th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let project of projects; let i = index\">\r\n          <td>{{project.projectID}}</td>\r\n          <td>{{project.projectName}}</td>\r\n          <td>{{project.dateOfStart}}</td>\r\n          <td>{{project.teamSize}}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" (click)=\"onEditClick($event, i)\" data-toggle=\"modal\"\r\n                    data-target=\"#editModal\">\r\n              Edit\r\n            </button>&nbsp;\r\n            <button class=\"btn btn-warning\" (click)=\"onDeleteClick($event, i)\" data-toggle=\"modal\"\r\n                    data-target=\"#deleteModal\">\r\n              Delete\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<form>\r\n  <div class=\"modal\" role=\"dialog\" id=\"newModal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" style=\"width:700px\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"modal-title\">New Project</div>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtNewProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" id=\"txtNewProjectID\" style=\"width:100px\" class=\"form-control\" placeholder=\"Project ID\"\r\n                     name=\"ProjectID\" [(ngModel)]=\"newProject.projectID\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtNewProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" id=\"txtNewProjectName\" class=\"form-control\" placeholder=\"Project Name\"\r\n                     name=\"ProjectName\" [(ngModel)]=\"newProject.projectName\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtNewDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"date\" id=\"txtNewDateOfStart\" style=\"width:150px\" class=\"form-control\"\r\n                     placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"newProject.dateOfStart\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"number\" id=\"txtTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\"\r\n                     name=\"TeamSize\" [(ngModel)]=\"newProject.teamSize\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\r\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onSaveClick()\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<!-- Edit Project -->\r\n<form>\r\n  <div class=\"modal\" role=\"dialog\" id=\"editModal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" style=\"width:700px\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"modal-title\">Edit Project</div>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtEditProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" id=\"txtEditProjectID\" style=\"width:100px\" class=\"form-control-plain-text\"\r\n                     placeholder=\"Project ID\" name=\"ProjectID\" [(ngModel)]=\"editProject.projectID\" disabled=\"disabled\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtEditProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" id=\"txtEditProjectName\" class=\"form-control\" placeholder=\"Project Name\"\r\n                     name=\"ProjectName\" [(ngModel)]=\"editProject.projectName\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtEditDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"date\" id=\"txtEditDateOfStart\" style=\"width:150px\" class=\"form-control\"\r\n                     placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"editProject.dateOfStart\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtEditTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"number\" id=\"txtEditTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\"\r\n                     name=\"TeamSize\" [(ngModel)]=\"editProject.teamSize\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\r\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onUpdateClick()\">Update</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<!-- Delete Project -->\r\n<form>\r\n  <div class=\"modal\" role=\"dialog\" id=\"deleteModal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" style=\"width:700px\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"modal-title\">Delete Project</div>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"text-warning\">Are you sure to delete this Project?</div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtDeleteProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" id=\"txtDeleteProjectID\" style=\"width:100px\" class=\"form-control-plain-text\"\r\n                     placeholder=\"Project ID\" name=\"ProjectID\" [(ngModel)]=\"deleteProject.projectID\" disabled=\"disabled\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"txtDeleteProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" id=\"txtDeleteProjectName\" class=\"form-control-plain-text\" placeholder=\"Project Name\"\r\n                     name=\"ProjectName\" [(ngModel)]=\"deleteProject.projectName\" disabled=\"disabled\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\r\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onDeleteConfirmClick()\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm bg-success navbar-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    Angular Task Manager\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mynav\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"mynav\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\r\n        <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"about\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\r\n        <a class=\"nav-link\" routerLink=\"projects\">Projects</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\r\n        <a class=\"nav-link\" href=\"#\">{{loginService.currentUserName}}</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"loginService.Logout()\">Logout</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"loginService.currentUserName == null\">\r\n        <a class=\"nav-link\" routerLink=\"login\">Login</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"search\"><i class=\"fa fa-search\"></i></span>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n      </div>\r\n      <button class=\"btn btn-warning my2- my-sm-0\" type=\"button\" (click)=\"onSearchClick()\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-xl-5 col-md-9 mx-auto\">\r\n      <div class=\"card mt-4\">\r\n        <div class=\"card-header bg-secondary text-white\">\r\n          <h3>Login</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group form-row\">\r\n            <label for=\"UserName\" class=\"col-md-4 col-form-label\">Username</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"loginViewModel.UserName\" name=\"UserName\" autofocus=\"autofocus\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group form-row\">\r\n            <label for=\"Password\" class=\"col-md-4 col-form-label\">Password</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginViewModel.Password\" name=\"Password\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer text-right\">\r\n          <span class=\"text-danger\">{{loginError}}&nbsp;</span>\r\n          <button class=\"btn btn-primary\" (click)=\"onLoginClick($event)\">Login</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/about/about.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/admin/about/about.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAdminAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/admin/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./my-profile/my-profile.component */
    "./src/app/admin/my-profile/my-profile.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/admin/about/about.component.ts");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/admin/projects/projects.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]],
      providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../dashboard.service */
    "./src/app/dashboard.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboardService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Designation = "Team Leader";
          this.Username = "Scott Smith";
          this.NoOfTeamMembers = 67;
          this.TotalCostOfAllProjects = 240;
          this.PendingTasks = 15;
          this.UpComingProjects = 0.2;
          this.ProjectCost = 2113507;
          this.CurrentExpenditure = 96788;
          this.AvailableFunds = 52536;
          this.ToDay = new Date();
          this.Clients = ["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"];
          this.Projects = ["Project A", "Project B", "Project C", "Project D"];

          for (var i = 2019; i >= 2010; i--) {
            this.Years.push(i);
          }

          this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
          this.TeamMembers = [{
            Region: "East",
            Members: [{
              ID: 1,
              Name: "Ford",
              Status: "Available"
            }, {
              ID: 2,
              Name: "Miller",
              Status: "Available"
            }, {
              ID: 3,
              Name: "Jones",
              Status: "Busy"
            }, {
              ID: 4,
              Name: "James",
              Status: "Busy"
            }]
          }, {
            Region: "West",
            Members: [{
              ID: 5,
              Name: "Anna",
              Status: "Available"
            }, {
              ID: 6,
              Name: "Arun",
              Status: "Available"
            }, {
              ID: 7,
              Name: "Varun",
              Status: "Busy"
            }, {
              ID: 8,
              Name: "Jasmine",
              Status: "Busy"
            }]
          }, {
            Region: "South",
            Members: [{
              ID: 9,
              Name: "Krishna",
              Status: "Available"
            }, {
              ID: 10,
              Name: "Mohan",
              Status: "Available"
            }, {
              ID: 11,
              Name: "Raju",
              Status: "Busy"
            }, {
              ID: 12,
              Name: "Farooq",
              Status: "Busy"
            }]
          }, {
            Region: "North",
            Members: [{
              ID: 13,
              Name: "Jacob",
              Status: "Available"
            }, {
              ID: 14,
              Name: "Smith",
              Status: "Available"
            }, {
              ID: 15,
              Name: "Jones",
              Status: "Busy"
            }, {
              ID: 16,
              Name: "James",
              Status: "Busy"
            }]
          }];
        }
      }, {
        key: "onProjectChange",
        value: function onProjectChange($event) {
          if ($event.target.innerHTML == "Project A") {
            this.ProjectCost = 2113507;
            this.CurrentExpenditure = 96788;
            this.AvailableFunds = 52436;
          } else if ($event.target.innerHTML == "Project B") {
            this.ProjectCost = 88923;
            this.CurrentExpenditure = 22450;
            this.AvailableFunds = 2640;
          } else if ($event.target.innerHTML == "Project C") {
            this.ProjectCost = 662183;
            this.CurrentExpenditure = 7721;
            this.AvailableFunds = 9811;
          } else if ($event.target.innerHTML == "Project D") {
            this.ProjectCost = 928431;
            this.CurrentExpenditure = 562;
            this.AvailableFunds = 883;
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/admin/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/my-profile/my-profile.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/admin/my-profile/my-profile.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMyProfileMyProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/my-profile/my-profile.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
    \**********************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppAdminMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyProfileComponent = /*#__PURE__*/function () {
      function MyProfileComponent() {
        _classCallCheck(this, MyProfileComponent);
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/my-profile/my-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-profile.component.scss */
      "./src/app/admin/my-profile/my-profile.component.scss"))["default"]]
    })], MyProfileComponent);
    /***/
  },

  /***/
  "./src/app/admin/projects/projects.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/admin/projects/projects.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/projects/projects.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/projects/projects.component.ts ***!
    \******************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppAdminProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../projects.service */
    "./src/app/projects.service.ts");
    /* harmony import */


    var src_app_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/project */
    "./src/app/project.ts");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(projectsService) {
        _classCallCheck(this, ProjectsComponent);

        this.projectsService = projectsService;
        this.projects = [];
        this.newProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.editProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.editIndex = null;
        this.deleteProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.deleteIndex = null;
        this.searchBy = "ProjectName";
        this.searchText = "";
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.projectsService.getAllProjects().subscribe(function (response) {
            _this.projects = response;
          });
        }
      }, {
        key: "onSaveClick",
        value: function onSaveClick() {
          var _this2 = this;

          this.projectsService.insertProject(this.newProject).subscribe(function (response) {
            //Add Project to Grid
            var p = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;

            _this2.projects.push(p); //Clear New Project Dialog - TextBoxes


            _this2.newProject.projectID = null;
            _this2.newProject.projectName = null;
            _this2.newProject.dateOfStart = null;
            _this2.newProject.teamSize = null;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onEditClick",
        value: function onEditClick(event, index) {
          this.editProject.projectID = this.projects[index].projectID;
          this.editProject.projectName = this.projects[index].projectName;
          this.editProject.dateOfStart = this.projects[index].dateOfStart;
          this.editProject.teamSize = this.projects[index].teamSize;
          this.editIndex = index;
        }
      }, {
        key: "onUpdateClick",
        value: function onUpdateClick() {
          var _this3 = this;

          this.projectsService.updateProject(this.editProject).subscribe(function (response) {
            var p = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            _this3.projects[_this3.editIndex] = p;
            _this3.editProject.projectID = null;
            _this3.editProject.projectName = null;
            _this3.editProject.dateOfStart = null;
            _this3.editProject.teamSize = null;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick(event, index) {
          this.deleteIndex = index;
          this.deleteProject.projectID = this.projects[index].projectID;
          this.deleteProject.projectName = this.projects[index].projectName;
          this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
          this.deleteProject.teamSize = this.projects[index].teamSize;
        }
      }, {
        key: "onDeleteConfirmClick",
        value: function onDeleteConfirmClick() {
          var _this4 = this;

          this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(function (response) {
            _this4.projects.splice(_this4.deleteIndex, 1);

            _this4.deleteProject.projectID = null;
            _this4.deleteProject.projectName = null;
            _this4.deleteProject.teamSize = null;
            _this4.deleteProject.dateOfStart = null;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onSearchClick",
        value: function onSearchClick() {
          var _this5 = this;

          this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(function (response) {
            _this5.projects = response;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/admin/projects/projects.component.scss"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/dashboard/dashboard.component */
    "./src/app/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/about/about.component */
    "./src/app/admin/about/about.component.ts");
    /* harmony import */


    var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/projects/projects.component */
    "./src/app/admin/projects/projects.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./can-activate-guard.service */
    "./src/app/can-activate-guard.service.ts");

    var routes = [{
      path: "",
      redirectTo: "login",
      pathMatch: "full"
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: "dashboard",
      component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]],
      data: {
        expectedRole: "Admin"
      }
    }, {
      path: "about",
      component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: "projects",
      component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
      canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]],
      data: {
        expectedRole: "Admin"
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(loginService) {
        _classCallCheck(this, AppComponent);

        this.loginService = loginService;
      }

      _createClass(AppComponent, [{
        key: "onSearchClick",
        value: function onSearchClick() {
          console.log(this.loginService.currentUserName);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./jwt-interceptor.service */
    "./src/app/jwt-interceptor.service.ts");
    /* harmony import */


    var _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./jwt-un-authorized-interceptor.service */
    "./src/app/jwt-un-authorized-interceptor.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
        config: {
          tokenGetter: function tokenGetter() {
            return sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
          }
        }
      })],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptorService"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["JwtUnAuthorizedInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/can-activate-guard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/can-activate-guard.service.ts ***!
    \***********************************************/

  /*! exports provided: CanActivateGuardService */

  /***/
  function srcAppCanActivateGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanActivateGuardService", function () {
      return CanActivateGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");

    var CanActivateGuardService = /*#__PURE__*/function () {
      function CanActivateGuardService(loginService, router, jwtHelperService) {
        _classCallCheck(this, CanActivateGuardService);

        this.loginService = loginService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
      }

      _createClass(CanActivateGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          //console.log(this.router.url);
          var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;

          if (this.loginService.isAuthenticated() && this.jwtHelperService.decodeToken(token).role == route.data.expectedRole) {
            return true; //the user can navigate to the particular route
          } else {
            this.router.navigate(["login"]);
            return false; //the user can't navigate to the particular route
          }
        }
      }]);

      return CanActivateGuardService;
    }();

    CanActivateGuardService.ctorParameters = function () {
      return [{
        type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
      }];
    };

    CanActivateGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CanActivateGuardService);
    /***/
  },

  /***/
  "./src/app/dashboard.service.ts":
  /*!**************************************!*\
    !*** ./src/app/dashboard.service.ts ***!
    \**************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService() {
        _classCallCheck(this, DashboardService);
      }

      _createClass(DashboardService, [{
        key: "getTeamMembersSummary",
        value: function getTeamMembersSummary() {
          var TeamMembersSummary = [{
            Region: "East",
            TeamMembersCount: 20,
            TemporarilyUnavailableMembers: 4
          }, {
            Region: "West",
            TeamMembersCount: 15,
            TemporarilyUnavailableMembers: 8
          }, {
            Region: "South",
            TeamMembersCount: 17,
            TemporarilyUnavailableMembers: 1
          }, {
            Region: "North",
            TeamMembersCount: 15,
            TemporarilyUnavailableMembers: 6
          }];
          return TeamMembersSummary;
        }
      }]);

      return DashboardService;
    }();

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DashboardService);
    /***/
  },

  /***/
  "./src/app/jwt-interceptor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/jwt-interceptor.service.ts ***!
    \********************************************/

  /*! exports provided: JwtInterceptorService */

  /***/
  function srcAppJwtInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function () {
      return JwtInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JwtInterceptorService = /*#__PURE__*/function () {
      function JwtInterceptorService() {
        _classCallCheck(this, JwtInterceptorService);
      }

      _createClass(JwtInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var currentUser = {
            token: ""
          };

          if (sessionStorage.currentUser != null) {
            currentUser = JSON.parse(sessionStorage.currentUser);
          }

          request = request.clone({
            setHeaders: {
              Authorization: "Bearer " + currentUser.token
            }
          });
          return next.handle(request);
        }
      }]);

      return JwtInterceptorService;
    }();

    JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], JwtInterceptorService);
    /***/
  },

  /***/
  "./src/app/jwt-un-authorized-interceptor.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/jwt-un-authorized-interceptor.service.ts ***!
    \**********************************************************/

  /*! exports provided: JwtUnAuthorizedInterceptorService */

  /***/
  function srcAppJwtUnAuthorizedInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtUnAuthorizedInterceptorService", function () {
      return JwtUnAuthorizedInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var JwtUnAuthorizedInterceptorService = /*#__PURE__*/function () {
      function JwtUnAuthorizedInterceptorService() {
        _classCallCheck(this, JwtUnAuthorizedInterceptorService);
      }

      _createClass(JwtUnAuthorizedInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {//do something with response
            }
          }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              if (error.status == 401) {
                console.log(error);
                alert("401 UnAuthorized");
              }
            }
          }));
        }
      }]);

      return JwtUnAuthorizedInterceptorService;
    }();

    JwtUnAuthorizedInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], JwtUnAuthorizedInterceptorService);
    /***/
  },

  /***/
  "./src/app/login-view-model.ts":
  /*!*************************************!*\
    !*** ./src/app/login-view-model.ts ***!
    \*************************************/

  /*! exports provided: LoginViewModel */

  /***/
  function srcAppLoginViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginViewModel", function () {
      return LoginViewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LoginViewModel = function LoginViewModel() {
      _classCallCheck(this, LoginViewModel);
    };
    /***/

  },

  /***/
  "./src/app/login.service.ts":
  /*!**********************************!*\
    !*** ./src/app/login.service.ts ***!
    \**********************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(httpBackend, jwtHelperService) {
        _classCallCheck(this, LoginService);

        this.httpBackend = httpBackend;
        this.jwtHelperService = jwtHelperService;
        this.currentUserName = null;
      }

      _createClass(LoginService, [{
        key: "Login",
        value: function Login(loginViewModel) {
          var _this6 = this;

          this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
          return this.httpClient.post("/authenticate", loginViewModel, {
            responseType: "json"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
              _this6.currentUserName = user.userName;
              sessionStorage.currentUser = JSON.stringify(user);
            }

            return user;
          }));
        }
      }, {
        key: "Logout",
        value: function Logout() {
          sessionStorage.removeItem("currentUser");
          this.currentUserName = null;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;

          if (this.jwtHelperService.isTokenExpired()) {
            return false; //token is not valid
          } else {
            return true; //token is valid
          }
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login-view-model */
    "./src/app/login-view-model.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(loginService, router) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_2__["LoginViewModel"]();
        this.loginError = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLoginClick",
        value: function onLoginClick(event) {
          var _this7 = this;

          this.loginService.Login(this.loginViewModel).subscribe(function (response) {
            _this7.router.navigateByUrl("/dashboard");
          }, function (error) {
            console.log(error);
            _this7.loginError = "Invalid Username or Password";
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/project.ts":
  /*!****************************!*\
    !*** ./src/app/project.ts ***!
    \****************************/

  /*! exports provided: Project */

  /***/
  function srcAppProjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Project = function Project() {
      _classCallCheck(this, Project);

      this.projectID = 0;
      this.projectName = null;
      this.dateOfStart = null;
      this.teamSize = 0;
    };
    /***/

  },

  /***/
  "./src/app/projects.service.ts":
  /*!*************************************!*\
    !*** ./src/app/projects.service.ts ***!
    \*************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProjectsService = /*#__PURE__*/function () {
      function ProjectsService(httpClient) {
        _classCallCheck(this, ProjectsService);

        this.httpClient = httpClient;
      }

      _createClass(ProjectsService, [{
        key: "getAllProjects",
        value: function getAllProjects() {
          // var currentUser = { token: "" };
          // var headers = new HttpHeaders();
          // headers = headers.set("Authorization", "Bearer ");
          // if (sessionStorage.currentUser != null)
          // {
          //   currentUser = JSON.parse(sessionStorage.currentUser);
          //   headers = headers.set("Authorization", "Bearer " + currentUser.token);
          // }
          return this.httpClient.get("/api/projects", {
            responseType: "json"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            for (var i = 0; i < data.length; i++) {
              data[i].teamSize = data[i].teamSize * 100;
            }

            return data;
          }));
        }
      }, {
        key: "insertProject",
        value: function insertProject(newProject) {
          return this.httpClient.post("/api/projects", newProject, {
            responseType: "json"
          });
        }
      }, {
        key: "updateProject",
        value: function updateProject(existingProject) {
          return this.httpClient.put("/api/projects", existingProject, {
            responseType: "json"
          });
        }
      }, {
        key: "deleteProject",
        value: function deleteProject(ProjectID) {
          return this.httpClient["delete"]("/api/projects?ProjectID=" + ProjectID);
        }
      }, {
        key: "SearchProjects",
        value: function SearchProjects(searchBy, searchText) {
          return this.httpClient.get("/api/projects/search/" + searchBy + "/" + searchText, {
            responseType: "json"
          });
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\ProjectManagement Tool\ProjectManager\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map