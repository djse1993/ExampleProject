//= wrapped
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates
//= require /angular/ui-bootstrap-tpls

angular.module("exampleproject.index", [
  "exampleproject.core",
  "ui.bootstrap.dropdown",
  "ui.bootstrap.collapse",
]);
