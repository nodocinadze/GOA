const fs = require("fs");
const path = require("path");


const createFoldersAndFiles = () => {
  for (let i = 1; i <= 10; i++) {
    const folderPath = path.join(__dirname, `folder${i}`);
    const classworkPath = path.join(folderPath, "classwork");
    const homeworkPath = path.join(folderPath, "homework");

    try {
      
      fs.mkdirSync(classworkPath, { recursive: true });
      fs.mkdirSync(homeworkPath, { recursive: true });

      
      fs.writeFileSync(path.join(classworkPath, "classwork.js"), 'console.log("goa best");');
      fs.writeFileSync(path.join(homeworkPath, "homework.js"), 'console.log("goa best");');

      console.log(`Created folder${i} with files`);
    } catch (error) {
      console.error(`Error creating folder${i}:`, error.message);
    }
  }
};


const deleteFoldersInRange = (start, end) => {
  for (let i = start; i <= end; i++) {
    const folderPath = path.join(__dirname, `folder${i}`);
    try {
      fs.rmSync(folderPath, { recursive: true, force: true });
      console.log(`Deleted folder${i}`);
    } catch (error) {
      console.error(`Error deleting folder${i}:`, error.message);
    }
  }
};


const logAction = (action, status) => {
  const logEntry = `${action} - ${new Date().toLocaleString()} - ${status}\n`;
  fs.appendFileSync("log.txt", logEntry);
};


const searchInFiles = (folderName, searchText) => {
  const results = { foundIn: [] };
  const folderPath = path.join(__dirname, folderName);

  try {
    const files = fs.readdirSync(folderPath);
    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      const content = fs.readFileSync(filePath, "utf-8");
      if (content.includes(searchText)) {
        results.foundIn.push(filePath);
      }
    });
    console.log(`Search for "${searchText}" completed in ${folderName}`);
  } catch (error) {
    console.error(`Error searching in ${folderName}:`, error.message);
  }

  return results;
};


const createServer = () => {
  const http = require("http");
  const port = 3000;

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Welcome to GOA!" }));
    } else if (req.url === "/log") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      const logs = fs.readFileSync("log.txt", "utf-8");
      res.end(logs);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Page not found" }));
    }
  });

  server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};


createFoldersAndFiles(); // 
deleteFoldersInRange(3, 7); //
const results = searchInFiles("folder1/classwork", "goa"); 
console.log("Search results:", results);
createServer(); 
