const p=require("puppeteer")
const url="https://www.hackerrank.com/auth/login"

let answer=[`#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int solveMeFirst(int a, int b) {
 // Hint: Type return a+b; below:
 return a+b;
}

int main() {
  int num1, num2;
  scanf("%d %d", &num1, &num2);
  int sum;
  cin>>num1>>num2;
  sum = solveMeFirst(num1,num2);
  printf("%d", sum);
  return 0;
}

`]

let page
p.launch({
    slowMo:true,
    headless:false,
    defaultViewport: null,
    args:['--start-maximized' ]
}).then(function(obj){
    return obj.pages();
}).then(function(pag){
    page=pag[0]
    return pag[0].goto(url)
}).then(function(){
    return page.type("#input-1","cibeci7994@submic.com",{delay:50})
}).then(function(){
    return page.type("#input-2","123456",{delay:50})
}).then(function(){
    return page.click("#tab-1-content-1 > div.login-form.auth-form.theme-m > form > div.form-item.clearfix > button > div > span",{delay:1000})
}).then(function (){
    return page.waitForSelector("#topics > section > div.dashboard-section-grid > div > div > ul > li:nth-child(1) > a > div > div",{visible:true})
})
.then(function(){
    return page.click("#topics > section > div.dashboard-section-grid > div > div > ul > li:nth-child(1) > a > div > div", {delay:500})
})
.then(function (){
    return page.waitForSelector("#contest-challenges-problem > div > header > div.cta-container > div > div > button > div > span",{visible:true})
})
.then(function(){
    return page.click("#contest-challenges-problem > div > header > div.cta-container > div > div > button > div > span")
})
.then(function(){
    return page.waitForSelector("#content > div > div > div > div > div.community-content > div > section > div > div > div > div.contents-wrapper > div > div.fs-right-pane > div > section > div:nth-child(1) > div > div.hr-monaco-editor-wrapper > div > div.pmR.pmL.pmB.hr-monaco-custom-input-wrapper.flex > div.checkBoxWrapper > div > label > div.checkbox-wrap > input",{visible:true})
})
.then(function(){
    return page.click("#content > div > div > div > div > div.community-content > div > section > div > div > div > div.contents-wrapper > div > div.fs-right-pane > div > section > div:nth-child(1) > div > div.hr-monaco-editor-wrapper > div > div.pmR.pmL.pmB.hr-monaco-custom-input-wrapper.flex > div.checkBoxWrapper > div > label > div.checkbox-wrap > input",{delay:200})
})
.then(function(){
    return page.type("#content > div > div > div > div > div.community-content > div > section > div > div > div > div.contents-wrapper > div > div.fs-right-pane > div > section > div:nth-child(1) > div > div.hr-monaco-editor-wrapper > div > div:nth-child(1) > div.hr-monaco-editor-with-statusbar > div.hr-monaco-editor > div.hr-monaco-editor-parent > div > div > div.overflow-guard > div.monaco-scrollable-element.editor-scrollable.vs.mac > div.lines-content.monaco-editor-background > div.view-lines > div > span > span",answer[0],{delay:10})
})
.then(function(){
    return page.evaluate( () => document.execCommand( 'selectall', false, null ) );
})
.then(function(){
    return page.evaluate( () => document.execCommand('copy') );
})
.then(function(){
    return page.$eval('#content > div > div > div > div > div.community-content > div > section > div > div > div > div.contents-wrapper > div > div.fs-right-pane > div > section > div:nth-child(1) > div > div.hr-monaco-editor-wrapper > div > div:nth-child(1) > div.hr-monaco-editor-with-statusbar > div.hr-monaco-editor', (el, value) =>{ el.value = value }, answer)
})
// .then(function(){
//     return this.page.keyboard.up('Control')
// })
// .then(function(){
//     return page.waitForSelector(".monaco-editor.no-user-select.vs",{visible:true})
// })
// .then(function(){
//     return page.click(".monaco-editor.no-user-select.vs")
// })
// .then(function(){
//     return page.keyboard.down('Control')
// })
// .then(function(){
//     return page.keyboard.press('A',{delay:100})
// })
// .then(function(){
//     return page.keyboard.press('V',{delay:100})
// })
// .then(function(){
//     return page.keyboard.up('Control')
// })
.catch(function(err){
    console.log(err)
})