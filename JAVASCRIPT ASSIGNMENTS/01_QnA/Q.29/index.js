// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


function getFileExtension(filename) {
     
    const parts = filename.split('.');
    if (parts.length > 1) {
        return parts[parts.length - 1];
    } else {
        return "No extension found";
    }
  }

  
  const filename = "document.pdf";
  const extension = getFileExtension(filename);
  console.log("File extension: " + extension);