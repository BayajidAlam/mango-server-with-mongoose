// create-module.ts
import fs from 'fs';
import path from 'path';
import chalk from 'chalk'; // Optional: for colored output

const moduleName = process.argv[2];

if (!moduleName) {
  console.error(chalk.red('❌ Please provide a module name.'));
  process.exit(1);
}

const files: string[] = [
  'constant.ts',
  'route.ts',
  'controller.ts',
  'service.ts',
  'interface.ts',
  'validation.ts',
  'model.ts'
];

const modulePath = path.join(__dirname, 'src', 'app', 'modules', moduleName);

if (!fs.existsSync(modulePath)) {
  fs.mkdirSync(modulePath, { recursive: true });
  console.log(chalk.green(`📁 Created folder: ${modulePath}`));
}

files.forEach(file => {
  const filePath = path.join(modulePath, `${moduleName}.${file}`);
  if (fs.existsSync(filePath)) {
    console.log(chalk.yellow(`⚠️  Skipped (already exists): ${filePath}`));
    return;
  }

  const content = `// ${moduleName} ${file.split('.')[0]}\n`;
  fs.writeFileSync(filePath, content);
  console.log(chalk.green(`✅ Created: ${filePath}`));
});
