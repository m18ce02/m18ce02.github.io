(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{371:function(e,a,t){"use strict";t.r(a);var s=t(14),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("code",[e._v("Version: 1.2 | Release Date: 07/02/2024")])]),e._v(" "),a("h2",{attrs:{id:"caution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caution"}},[e._v("#")]),e._v(" Caution")]),e._v(" "),a("p",[e._v("If you lack a basic understanding of the aiM18 platform, be sure to read the following information first:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/pages/7488ac/"}},[e._v("aiM18 App Concept")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/pages/793dcd/"}},[e._v("aiM18 Frontend Framework")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/pages/793dce/"}},[e._v("aiM18 Backend Framework")])],1)]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ol",[a("li",[e._v("Please make sure you have installed the "),a("code",[e._v("User acceptance testing (UAT)")]),e._v(" program . You can think of "),a("code",[e._v("UAT")]),e._v(" program as another completely independent aiM18 platform for user testing, and our development environment relies on it.")]),e._v(" "),a("li",[e._v("You may need to contact Multiable staff to install the "),a("code",[e._v("User acceptance testing (UAT)")]),e._v(" program.")]),e._v(" "),a("li",[e._v("Copy "),a("code",[e._v("UAT")]),e._v(" "),a("RouterLink",{attrs:{to:"/pages/7488ac/#aim18-architecture"}},[e._v(" WildFly")]),e._v(" to your development PC.")],1),e._v(" "),a("li",[e._v("Since your machine is going to run "),a("code",[e._v("UAT WildFly")]),e._v(", we recommend that you have at least 4G of memory.")]),e._v(" "),a("li",[e._v("JDK version 1.8 or higher")]),e._v(" "),a("li",[e._v("In this document, the app name is assumed to be "),a("code",[e._v("opcq")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"configuration-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-guide"}},[e._v("#")]),e._v(" Configuration Guide")]),e._v(" "),a("h3",{attrs:{id:"_1-install-jre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-jre"}},[e._v("#")]),e._v(" 1. Install JRE")]),e._v(" "),a("p",[e._v("Make sure JRE installed with version 1.8 or higher")]),e._v(" "),a("h3",{attrs:{id:"_2-add-server-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-server-runtime"}},[e._v("#")]),e._v(" 2. Add Server Runtime")]),e._v(" "),a("ol",[a("li",[e._v("Runtime = "),a("code",[e._v("WildFly Application Server 9.x")])]),e._v(" "),a("li",[e._v("Home Directory = The WildFly you copied from "),a("code",[e._v("User acceptance testing (UAT)")]),e._v("\n| "),a("img",{attrs:{src:"/assets/runtime.png",alt:"runtime"}})]),e._v(" "),a("li",[e._v("Create a server Adapter use this runtime\n| "),a("img",{attrs:{src:"/assets/server.jpg",alt:"server"}})])]),e._v(" "),a("h3",{attrs:{id:"_3-create-app-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-app-structure"}},[e._v("#")]),e._v(" 3. Create App Structure")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("git clone")]),e._v(" App Skeleton from "),a("a",{attrs:{href:"https://github.com/m18ce01/M18-App-Skeleton",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github aiM18"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/m18ce01/M18-App-Skeleton.git opcq\n")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("opcq")]),e._v(" folder structure should looks like")])])]),e._v(" "),a("p",[e._v("​      "),a("img",{attrs:{src:"/assets/s1.jpg",alt:"s1"}})]),e._v(" "),a("h3",{attrs:{id:"_4-import-projects-from-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-import-projects-from-folder"}},[e._v("#")]),e._v(" 4. Import Projects from Folder")]),e._v(" "),a("p",[e._v("Use [File -> Import Projects from Folder] of Eclipse to import "),a("code",[e._v("p-ear")]),e._v(" "),a("code",[e._v("p-ejb")]),e._v(" "),a("code",[e._v("p-jsf")]),e._v(" "),a("code",[e._v("p-share")]),e._v("  one by one")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s2.png",alt:"s2"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s3.png",alt:"s3"}})]),e._v(" "),a("h3",{attrs:{id:"_5-configuring-app-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-configuring-app-properties"}},[e._v("#")]),e._v(" 5. Configuring App Properties")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("the default App name is "),a("code",[e._v("paml")]),e._v(", we need to rename it as "),a("code",[e._v("opcq")])]),e._v(" "),a("p",[e._v("change "),a("code",[e._v("paml_ejb.jar")]),e._v(" => "),a("code",[e._v("opcq_ejb.jar")])]),e._v(" "),a("p",[e._v("change "),a("code",[e._v("paml_share.jar")]),e._v("=> "),a("code",[e._v("opcq_share.jar")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s4.png",alt:"s4"}})]),e._v(" "),a("ul",[a("li",[e._v("update app.xml , you can refer to "),a("RouterLink",{attrs:{to:"/pages/7488ac/#about-app-xml"}},[e._v("Overview - app.xml")]),e._v(" for detail.")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s5.png",alt:"s5"}})]),e._v(" "),a("h3",{attrs:{id:"_6-copy-compile-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-copy-compile-environment"}},[e._v("#")]),e._v(" 6. Copy compile environment")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s6.png",alt:"s6"}})]),e._v(" "),a("p",[e._v("Your "),a("code",[e._v("WildFly Home\\standalone\\deployments\\caw_ear.ear")]),e._v(" directory should have more Jars than the one shown above (depending on how many apps you have installed)")]),e._v(" "),a("p",[a("code",[e._v("*_ejb.jar")]),e._v(" means all Jars whose names end in "),a("code",[e._v("_ejb.jar")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("copy "),a("code",[e._v("WildFly Home\\standalone\\deployments\\caw_ear.ear\\*_ejb.jar")]),e._v(" to "),a("code",[e._v("caw_ear\\lib\\ejb")])])]),e._v(" "),a("li",[a("p",[e._v("copy  "),a("code",[e._v("WildFly Home\\standalone\\deployments\\caw_ear.ear\\lib\\*_share.jar")]),e._v(" to "),a("code",[e._v("caw_ear\\lib\\share")])])]),e._v(" "),a("li",[a("p",[e._v("copy  "),a("code",[e._v("WildFly Home\\standalone\\deployments\\caw_ear.ear\\jsf.war\\WEB-INF\\lib\\*_jsf.jar")]),e._v(" to "),a("code",[e._v("caw_ear\\lib\\jsf")])])])]),e._v(" "),a("h3",{attrs:{id:"_7-config-p-ejb-build-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-config-p-ejb-build-path"}},[e._v("#")]),e._v(" 7. Config p-ejb build path")]),e._v(" "),a("p",[e._v("add all jars which under "),a("code",[e._v("caw_ear\\lib\\ejb")]),e._v(" and "),a("code",[e._v("caw_ear\\lib\\share")]),e._v(" to Libraries")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/b3.jpg",alt:"b3"}})]),e._v(" "),a("h3",{attrs:{id:"_8-config-p-jsf-build-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-config-p-jsf-build-path"}},[e._v("#")]),e._v(" 8. Config p-jsf build path")]),e._v(" "),a("p",[e._v("add all jars which under "),a("code",[e._v("caw_ear\\lib\\jsf")]),e._v(" and "),a("code",[e._v("caw_ear\\lib\\share")]),e._v(" to Libraries")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/b2.jpg",alt:"b2"}})]),e._v(" "),a("h3",{attrs:{id:"_9-config-p-share-build-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-config-p-share-build-path"}},[e._v("#")]),e._v(" 9. Config p-share build path")]),e._v(" "),a("p",[e._v("add all jars which under  "),a("code",[e._v("caw_ear\\lib\\share")]),e._v(" to Libraries")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/b1.jpg",alt:"b1"}})]),e._v(" "),a("h3",{attrs:{id:"_10-extend-wildfly-9-x-runtime-classpath-entries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-extend-wildfly-9-x-runtime-classpath-entries"}},[e._v("#")]),e._v(" 10. Extend WildFly 9.x Runtime Classpath Entries")]),e._v(" "),a("p",[e._v("The aiM18 platform introduces several Jar packages through the WildFly Module. Adding these Jar packages will greatly facilitate your development process.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/b5.jpg",alt:"b5"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/b6.jpg",alt:"b6"}})]),e._v(" "),a("p",[a("strong",[e._v("Add these three to classpath entry")])]),e._v(" "),a("p",[a("code",[e._v("WildFly Home\\modules\\system\\layes\\caw")])]),e._v(" "),a("p",[a("code",[e._v("WildFly Home\\modules\\system\\layes\\em")])]),e._v(" "),a("p",[a("code",[e._v("WildFly Home\\modules\\system\\layes\\base")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/b7.jpg",alt:"b7"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/b4.jpg",alt:"b4"}})]),e._v(" "),a("h3",{attrs:{id:"_11-run-the-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-run-the-program"}},[e._v("#")]),e._v(" 11. Run the program")]),e._v(" "),a("p",[e._v("add "),a("code",[e._v("caw_ear")]),e._v(" project to Eclipse Server and start")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s7.jpg",alt:"s7"}})]),e._v(" "),a("h3",{attrs:{id:"_12-build-the-app-by-ant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-build-the-app-by-ant"}},[e._v("#")]),e._v(" 12. Build the App by Ant")]),e._v(" "),a("p",[e._v("modify "),a("code",[e._v("\\opcq\\p-other\\ant\\build_output.xml")]),e._v(", change appname => "),a("code",[e._v("opcq")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s8.png",alt:"s8"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s9.png",alt:"s9"}})]),e._v(" "),a("p",[e._v("You should get jars under \\opcq\\p-other\\jar like this")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/s10.png",alt:"s10"}})]),e._v(" "),a("h3",{attrs:{id:"_13-deploy-the-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-deploy-the-app"}},[e._v("#")]),e._v(" 13. Deploy the App")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("copy  "),a("code",[e._v("opcq_ejb.jar")]),e._v(" to "),a("code",[e._v("WildFly Home\\standalone\\deployments\\caw_ear.ear\\")])])]),e._v(" "),a("li",[a("p",[e._v("copy  "),a("code",[e._v("opcq_share.jar")]),e._v(" to "),a("code",[e._v("WildFly Home\\standalone\\deployments\\caw_ear.ear\\lib\\")])])]),e._v(" "),a("li",[a("p",[e._v("copy  "),a("code",[e._v("opcq_jsf.jar")]),e._v(" to "),a("code",[e._v("WildFly Home\\standalone\\deployments\\caw_ear.ear\\jsf.war\\WEB-INF\\lib\\")])])])]),e._v(" "),a("p",[a("strong",[e._v("You can also build the app into a specific format and install it via USU.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);