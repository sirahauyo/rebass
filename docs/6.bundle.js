(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{381:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(1)),r=l(n(427)),u=l(n(387)),i=l(n(385));t.default=function(){return o.default.createElement("div",null,o.default.createElement(u.default,{children:r.default}),o.default.createElement(i.default,{previous:{href:"/props",name:"Props"},next:{href:"/theming",name:"Theming"}}))}},384:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(8)),r=l(n(1)),u=n(12);t.default=function(e){return r.default.createElement(u.Heading,(0,o.default)({},e,{is:"h1",fontSize:[5,6,7,8],my:4}))}},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),o=n(17),r=n(389),u=n(12);t.default=function(e){return l.default.createElement(u.Flex,{my:[3,5]},e.previous&&l.default.createElement(u.NavLink,{is:o.Link,to:e.previous.href},l.default.createElement(r.Chevron,{left:!0,size:16}),l.default.createElement(u.Text,{fontWeight:"bold",ml:2},e.previous.name)),e.next&&l.default.createElement(u.NavLink,{is:o.Link,ml:"auto",to:e.next.href},l.default.createElement(u.Text,{bold:!0,mr:2},e.next.name),l.default.createElement(r.Chevron,{right:!0,size:16})))}},387:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(8)),r=l(n(18)),u=l(n(24)),i=l(n(23)),a=l(n(22)),d=l(n(21)),f=l(n(1)),x=(l(n(7)),l(n(107))),c=l(n(391)),p=n(12),s=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(p),l(n(384))),h=function(e){function t(){return(0,u.default)(this,t),(0,a.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return f.default.createElement(c.default,{source:this.props.children,renderers:m})}}]),t}(f.default.Component),m={code:function(e){var t=e.language,n=e.value;if(!/\./.test(t))return f.default.createElement(p.Pre,{fontSize:13,px:3,py:3,my:3,color:"blue",bg:"#fcfcff"},n);var l=!!/\.\./.test(t);return f.default.createElement(p.Box,{mb:3},f.default.createElement(x.default,{code:n,noInline:l}))},heading:function(e){return 1===e.level?f.default.createElement(s.default,e):f.default.createElement(p.BlockLink,{href:"#"+e.children},f.default.createElement(p.Heading,(0,o.default)({},e,{id:e.children,mt:5,mb:2})))},inlineCode:function(e){return f.default.createElement(p.Code,{color:"blue",children:e.value})},link:p.Link,paragraph:function(e){return f.default.createElement(p.Measure,(0,o.default)({},e,{maxWidth:"40em",mb:3}))}};t.default=h},427:function(e){e.exports="\n# Grid System\n\nRebass includes the incredibly flexible, responsive flexbox grid system\n[Grid Styled](http://jxnblk.com/grid-styled).\nUse the `<Flex />` and `<Box />` components to fine tune spacing and alignment in a variety of combination.\n\n```.jsx\n<Flex mx={-2}>\n  <Box width={1/2} px={2}>\n    <Text p={1} color='white' bg='blue'>\n      Half\n    </Text>\n  </Box>\n  <Box width={1/2} px={2}>\n    <Text p={1} color='white' bg='blue'>\n      Half\n    </Text>\n  </Box>\n</Flex>\n```\n\n```.jsx\n<Flex flexWrap='wrap' mx={-2}>\n  <Box px={2} py={2} width={1/2}>\n    <Text p={1} color='white' bg='blue'>\n      1/2\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/2}>\n    <Text p={1} color='white' bg='blue'>\n      1/2\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/3}>\n    <Text p={1} color='white' bg='blue'>\n      1/3\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/3}>\n    <Text p={1} color='white' bg='blue'>\n      1/3\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/3}>\n    <Text p={1} color='white' bg='blue'>\n      1/3\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/4}>\n    <Text p={1} color='white' bg='blue'>\n      1/4\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/4}>\n    <Text p={1} color='white' bg='blue'>\n      1/4\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/4}>\n    <Text p={1} color='white' bg='blue'>\n      1/4\n    </Text>\n  </Box>\n  <Box px={2} py={2} width={1/4}>\n    <Text p={1} color='white' bg='blue'>\n      1/4\n    </Text>\n  </Box>\n</Flex>\n```\n\n```.jsx\n<Flex alignItems='center'>\n  <Box width={1/3}>\n    <Heading\n      py={4}\n      fontSize={[ 5, 6 ]}\n      color='white'\n      bg='blue'>\n      Hello\n    </Heading>\n  </Box>\n  <Box width={1/3} ml='auto'>\n    <Text>Grid</Text>\n  </Box>\n</Flex>\n```\n\nSee the [Grid Styled documentation](https://github.com/jxnblk/grid-styled) for more.\n"}}]);