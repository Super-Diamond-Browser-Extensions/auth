const SuperDiamondBrowserExtensionEditor = {
 set: function (Name, Manifest) {
  var extension = {
   name: Name,
   manifest: "" + Manifest + ""
  }
  SuperDiamondBrowserExtensionEditor.setRequestElement.contentWindow.postMessage(JSON.stringify(extension), "*")
 },
 delete: function (Name) {
  SuperDiamondBrowserExtensionEditor.deleteRequestElement.contentWindow.postMessage(Name, "*")
 },
 get: function (Name) {
  return SuperDiamondBrowserExtensionEditor.getRequestElement.contentWindow.postMessage(Name, "*");
 }
}
SuperDiamondBrowserExtensionEditor.setRequestElement = document.createElement("iframe")
SuperDiamondBrowserExtensionEditor.setRequestElement.style.display = "none"
SuperDiamondBrowserExtensionEditor.setRequestElement.src = "https://super-diamond-browser-extensions.github.io/auth/create.html"
document.body.appendChild(SuperDiamondBrowserExtensionEditor.setRequestElement)
SuperDiamondBrowserExtensionEditor.deleteRequestElement = document.createElement("iframe")
SuperDiamondBrowserExtensionEditor.deleteRequestElement.style.display = "none"
SuperDiamondBrowserExtensionEditor.deleteRequestElement.src = "https://super-diamond-browser-extensions.github.io/auth/delete.html"
document.body.appendChild(SuperDiamondBrowserExtensionEditor.deleteRequestElement)
SuperDiamondBrowserExtensionEditor.getRequestElement = document.createElement("iframe")
SuperDiamondBrowserExtensionEditor.getRequestElement.style.display = "none"
SuperDiamondBrowserExtensionEditor.getRequestElement.src = "https://super-diamond-browser-extensions.github.io/auth/get.html"
document.body.appendChild(SuperDiamondBrowserExtensionEditor.getRequestElement)
SuperDiamondBrowserExtensionEditor.clearRequestElement = document.createElement("iframe")
SuperDiamondBrowserExtensionEditor.clearRequestElement.style.display = "none"
SuperDiamondBrowserExtensionEditor.clearRequestElement.src = "https://super-diamond-browser-extensions.github.io/auth/clear.html"
document.body.appendChild(SuperDiamondBrowserExtensionEditor.clearRequestElement)
