// window.addEventListener("scroll", function() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("post_title").classList.add("sticky");
//         document.getElementById("toc").setAttribute("style", `position: sticky;top:${post_title.clientHeight + 10}px`);
//     } else {
//         document.getElementById("post_title").classList.remove("sticky");
//         document.getElementById("post_title").classList.add("un-sticky");
//     }
// });

let content = document.getElementById('content');
let toc = document.getElementById("toc");

for (let i = 0; i <= content.children.length; i++) {
    if (content.children[i].nodeName == 'H1') {
        let h1 = document.createElement('h1');
        h1.innerText = content.children[i].innerText;
        toc.append(h1);
    }

    if (content.children[i].nodeName == 'H2') {
        let h2 = document.createElement('h2');
        content.children[i].setAttribute("id", content.children[i].innerText);
        let a = document.createElement('a');
        a.setAttribute("href", "#" + content.children[i].innerText);
        a.innerText = content.children[i].innerText;
        h2.append(a);
        toc.append(h2);
    }
}