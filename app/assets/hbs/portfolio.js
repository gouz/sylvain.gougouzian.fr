this["cv"] = this["cv"] || {};
this["cv"]["templates"] = this["cv"]["templates"] || {};
this["cv"]["templates"]["portfolio"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"col-sm-4 portfolio-item\"><a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"portfolio-link\" target=\"_blank\"><div class=\"caption\"><div class=\"caption-content\"><i class=\"fa fa-search-plus fa-3x\"></i><br>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div></div><img src=\"assets/img/portfolio/"
    + alias3(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"img","hash":{},"data":data}) : helper)))
    + ".png\" class=\"img-responsive\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></a></div>";
},"useData":true});