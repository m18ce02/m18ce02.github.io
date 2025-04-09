(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{362:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("Version: 1.2 | Release Date: 07/02/2024")])]),t._v(" "),a("h2",{attrs:{id:"the-steps-to-create-ebi-enduser-driven-business-intelligence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-steps-to-create-ebi-enduser-driven-business-intelligence"}},[t._v("#")]),t._v(" The Steps to create EBI(Enduser-driven Business Intelligence)")]),t._v(" "),a("ol",[a("li",[t._v("Create Query，we use Query to retrieve data from database directly.")]),t._v(" "),a("li",[t._v("Create QuerySet，we use QuerySet to connect multiple Query together and QuerySet can be used to generate an EBI report or Combined QuerySet for further manipulate.")]),t._v(" "),a("li",[t._v("Create Combined Set(Option Step)， we use Combined Set to combine multiple QuerySet together, the combine action support: Minus / Union / Union all / Interset.")]),t._v(" "),a("li",[t._v("Create EBI, The EBI Builder use QuerySet or Combined Set to create an EBI Report")]),t._v(" "),a("li",[t._v("Export EBI")])]),t._v(" "),a("h2",{attrs:{id:"create-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-query"}},[t._v("#")]),t._v(" Create Query")]),t._v(" "),a("p",[t._v("You write some script to retrieve data from Database, the scripts combined  standard SQL grammar string with custom Input Parameter.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi1.jpg",alt:"ebi1"}})]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" testTimeStamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12:08:34'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" testTime\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employee a\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.dept'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_deptFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.position'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_posFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("criteriaForMySQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.sex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_sexFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("criteriaForMySQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.createDate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_createDateFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_idFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.expired'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_expiredFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?{"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_empCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("} "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ?{"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_empCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The script you wrote would be compiled by EBI engine and generate the executable script as below")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" testTimeStamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12:08:34'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" testTime\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employee a\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dept "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_qt_IBSWTCIQGG "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_qt_HBDTYCMZAC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ?\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ?\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_qt_GUAEMVFIDM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("? "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n {"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'male'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.549")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("}\n")])])]),a("p",[t._v("There are three types of custom input parameters, you should define it in the [Input Parameter] Tab and reference it as D_xxxx (xxxx = the parameter code)")]),t._v(" "),a("ol",[a("li",[t._v("Lookup")]),t._v(" "),a("li",[t._v("Criteria")]),t._v(" "),a("li",[t._v("Primitive")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi2.jpg",alt:"ebi1"}})]),t._v(" "),a("p",[t._v("The parameters you defined here finally affect the GUI generated by [EBI Builder]")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi5.jpg",alt:"ebi5"}})]),t._v(" "),a("h3",{attrs:{id:"lookup-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lookup-parameter"}},[t._v("#")]),t._v(" Lookup Parameter")]),t._v(" "),a("p",[t._v("Every Lookup parameter represent One Turbo Filter on the GUI, the grammar of the Lookup Parameter as below:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.dept'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_deptFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n")])])]),a("p",[t._v("The condition above with the parameters will be translated into the real script.\nEnd user has the opportunity to add some extra filters in Turbo Filter which will be appended to "),a("code",[t._v("id != 0")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dept "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_qt_IBSWTCIQGG "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"criteria-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#criteria-parameter"}},[t._v("#")]),t._v(" Criteria Parameter")]),t._v(" "),a("p",[t._v("You need to choose the type of Criteria Parameter furthermore within (Text、Integer、Decimal、Logical\\Boolean、Date、Datetime)\nthe grammar of the Criteria Parameter as below:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("criteriaForMySQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.createDate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_createDateFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n")])])]),a("p",[t._v("The real script as below，"),a("code",[t._v("?")]),t._v(" represent a placeholder parameter for script，"),a("code",[t._v("<")]),t._v(" is decided by what the user-chosen on the GUI.")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("a.createDate < ?\n")])])]),a("p",[t._v("The Criterial Parameter will be displayed in the [Report Option] section of EBI, the type of Criterial Parameter decide the Operators can be used.\nSuch as Date type, the available Operators listed below:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi6.jpg",alt:"ebi6"}})]),t._v(" "),a("h3",{attrs:{id:"primitive-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primitive-parameter"}},[t._v("#")]),t._v(" Primitive Parameter")]),t._v(" "),a("p",[t._v("Include: Text、Integer、Decimal、Logical\\Boolean、Date、Datetime")]),t._v(" "),a("p",[t._v("Primitive Parameter will be displayed in the [Report Option] section of EBI， the Operator is fixed as :"),a("code",[t._v("=")])]),t._v(" "),a("p",[t._v("You use the grammar below to reference the parameter and EBI engine will replace it with real value.")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("?{[@D_empCode]}\n")])])]),a("h3",{attrs:{id:"data-handler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-handler"}},[t._v("#")]),t._v(" Data Handler")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi4.jpg",alt:"ebi4"}})]),t._v(" "),a("p",[t._v("This function is used for Java level filtering and processing of Query results. It can perform complex calculations on Query results line by line in Java.")]),t._v(" "),a("p",[t._v("You only need to specify the class name when you use it (the inner class needs to be specified with the $ symbol), and the Class must implement the QueryRowHandler interface.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryRowHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlTable")]),t._v(" rowData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"create-queryset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-queryset"}},[t._v("#")]),t._v(" Create QuerySet")]),t._v(" "),a("p",[t._v("Extend multiple Querys with horizontal links")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi7.jpg",alt:"ebi7"}})]),t._v(" "),a("h2",{attrs:{id:"create-combined-queryset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-combined-queryset"}},[t._v("#")]),t._v(" Create Combined QuerySet")]),t._v(" "),a("p",[t._v("Collecting multiple QuerySets")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi8.jpg",alt:"ebi8"}})]),t._v(" "),a("h2",{attrs:{id:"create-ebi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-ebi"}},[t._v("#")]),t._v(" Create EBI")]),t._v(" "),a("p",[t._v("Create EBI via [EBI Builder]. The current Query Source Type is only QuerySet and Combined QuerySet.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi9.jpg",alt:"ebi9"}})]),t._v(" "),a("p",[t._v("The EBI after creation can be added to the Menu as an entry through the UDF Menu.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/ebi10.jpg",alt:"ebi10"}})]),t._v(" "),a("p",[t._v("Developers can also modify it by xml, pay attention to the code of EBI equal to the code of Menu.")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("menu")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("raindrop_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("messCode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("empbi.hr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("view/module/ebi/ebi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mType")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("EBI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("apDebug")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("inherit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ebi_module_fc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("inherit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("menu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"export-ebi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-ebi"}},[t._v("#")]),t._v(" Export EBI")]),t._v(" "),a("p",[t._v("EBI can be imported/exported via [EBI XML Console]")])])}),[],!1,null,null,null);a.default=r.exports}}]);