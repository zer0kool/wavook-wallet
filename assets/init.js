// $(document).keydown(function (e) {
//     if ((e.key == 's' || e.key == 'S') && (e.ctrlKey || e.metaKey)) {
//         e.preventDefault();
//         let saveWallet = '<i class="material-icons left">save</i><b> Wallet has been saved</b>';
//         M.toast({
//             html: saveWallet,
//             classes: 'white-text'
//         })
//
//         function simpleSave() {
//             if (filePath === "") {
//                 saveAs();
//             } else {
//                 console.log('Saving in ' + filePath);
//                 win.webContents.send('saved-file', filePath);
//             }
//         }
//         return false;
//     }
//     return true;
// });
