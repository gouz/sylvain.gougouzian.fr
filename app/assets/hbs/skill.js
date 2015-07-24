this["cv"]["templates"]["skill"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"col-sm-1 col-xs-3 skill-item\"><a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"skill-link\" target=\"_blank\"><img src=\"assets/img/skills/"
    + ((stack1 = (helpers.logoapi || (depth0 && depth0.logoapi) || alias1).call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"logoapi","hash":{},"data":data})) != null ? stack1 : "")
    + ".png\" class=\"img-responsive\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"><div class=\"caption\"><div class=\"caption-content\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div></div></a></div>";
},"useData":true});