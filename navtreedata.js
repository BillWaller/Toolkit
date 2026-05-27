/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "C-Menu", "index.html", [
    [ "Table of Contents", "index.html#table-of-contents-7", null ],
    [ "Why C-Menu", "index.html#why-c-menu", null ],
    [ "Components", "index.html#components", null ],
    [ "Quick Start", "index.html#quick-start", null ],
    [ "Core Concepts", "index.html#core-concepts", null ],
    [ "Examples", "index.html#examples-1", [
      [ "Menu", "index.html#menu-2", null ],
      [ "Form", "index.html#form-2", null ],
      [ "Pick", "index.html#pick-1", null ],
      [ "View", "index.html#view-2", null ],
      [ "lf", "index.html#lf-1", null ],
      [ "rsh", "index.html#rsh-1", null ]
    ] ],
    [ "Documentation", "index.html#documentation-1", null ],
    [ "Configuration", "index.html#configuration-1", null ],
    [ "Platform and Requirements", "index.html#platform-and-requirements", null ],
    [ "Security Notes", "index.html#security-notes", null ],
    [ "Why the Design Works", "index.html#why-the-design-works", null ],
    [ "Contributing", "index.html#contributing", null ],
    [ "API", "d8/d4e/a01355.html", [
      [ "How to get C-Menu", "d8/d4e/a01355.html#how-to-get-c-menu", [
        [ "Get C-Menu on Github", "d8/d4e/a01355.html#get-c-menu-on-github", null ],
        [ "Introduction", "d8/d4e/a01355.html#introduction", null ],
        [ "API Organization", "d8/d4e/a01355.html#api-organization", [
          [ "C-Menu Header Files", "d8/d4e/a01355.html#c-menu-header-files", [
            [ "include/cm.h", "d8/d4e/a01355.html#includecmh", null ],
            [ "include/common.h", "d8/d4e/a01355.html#includecommonh", null ],
            [ "include/menu.h, form.h, pick.h, and view.h", "d8/d4e/a01355.html#includemenuh-formh-pickh-and-viewh", null ],
            [ "include/version.h and version.h", "d8/d4e/a01355.html#includeversionh-and-versionh", null ],
            [ "Version Compatibility", "d8/d4e/a01355.html#version-compatibility", null ],
            [ "Roadmap for API Documentation and User Guide", "d8/d4e/a01355.html#roadmap-for-api-documentation-and-user-guide", null ],
            [ "Documentation", "d8/d4e/a01355.html#documentation", null ]
          ] ]
        ] ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d8/d4e/a01355.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
      ] ]
    ] ],
    [ "C-Menu-Addendum", "d2/d3f/a01356.html", [
      [ "How to get C-Menu", "d2/d3f/a01356.html#how-to-get-c-menu-1", [
        [ "Get C-Menu on Github", "d2/d3f/a01356.html#get-c-menu-on-github-1", null ],
        [ "Table of Contents", "d2/d3f/a01356.html#table-of-contents", null ],
        [ "Introduction", "d2/d3f/a01356.html#introduction-1", null ],
        [ "Prerequisites", "d2/d3f/a01356.html#prerequisites", [
          [ "Not Required, But Recommended", "d2/d3f/a01356.html#not-required-but-recommended", null ]
        ] ],
        [ "Getting Started", "d2/d3f/a01356.html#getting-started", [
          [ "C-Menu Environment Variables", "d2/d3f/a01356.html#c-menu-environment-variables", null ],
          [ "C-Menu File Layout", "d2/d3f/a01356.html#c-menu-file-layout", null ],
          [ "RSH Safety Features", "d2/d3f/a01356.html#rsh-safety-features", null ],
          [ "Using RSH", "d2/d3f/a01356.html#using-rsh", null ],
          [ "RSH - A Use Case", "d2/d3f/a01356.html#rsh---a-use-case", null ]
        ] ],
        [ "Starting C-Menu", "d2/d3f/a01356.html#starting-c-menu", null ],
        [ "C-Menu configuration", "d2/d3f/a01356.html#c-menu-configuration", null ],
        [ "How C-Menu Menu Works", "d2/d3f/a01356.html#how-c-menu-menu-works", [
          [ "C-Menu Example Applications Menu", "d2/d3f/a01356.html#c-menu-example-applications-menu", null ],
          [ "Menu Description File Format", "d2/d3f/a01356.html#menu-description-file-format", null ],
          [ "Form field editor", "d2/d3f/a01356.html#form-field-editor", [
            [ "Form Line Type Specifiers", "d2/d3f/a01356.html#form-line-type-specifiers", null ],
            [ "Form Field Delimiters", "d2/d3f/a01356.html#form-field-delimiters", null ],
            [ "Form Data Types", "d2/d3f/a01356.html#form-data-types", null ],
            [ "Form Line Syntax", "d2/d3f/a01356.html#form-line-syntax", null ],
            [ "Form Options", "d2/d3f/a01356.html#form-options", null ]
          ] ]
        ] ],
        [ "C-Menu Pick", "d2/d3f/a01356.html#c-menu-pick", [
          [ "Pick Usage", "d2/d3f/a01356.html#pick-usage", [
            [ "Selecting Items", "d2/d3f/a01356.html#selecting-items", null ]
          ] ],
          [ "Pick Options", "d2/d3f/a01356.html#pick-options", null ]
        ] ],
        [ "C-Menu View", "d2/d3f/a01356.html#c-menu-view", [
          [ "View Options", "d2/d3f/a01356.html#view-options", [
            [ "View Navigation", "d2/d3f/a01356.html#view-navigation", null ],
            [ "Searching Forward", "d2/d3f/a01356.html#searching-forward", null ],
            [ "Searching Backward", "d2/d3f/a01356.html#searching-backward", null ],
            [ "Horizontal Scrolling", "d2/d3f/a01356.html#horizontal-scrolling", null ],
            [ "Motion Keys", "d2/d3f/a01356.html#motion-keys", null ]
          ] ],
          [ "C-Menu Options", "d2/d3f/a01356.html#c-menu-options", null ],
          [ "C-Menu configuration file example", "d2/d3f/a01356.html#c-menu-configuration-file-example", null ],
          [ "lf", "d2/d3f/a01356.html#lf", null ],
          [ "whence", "d2/d3f/a01356.html#whence", null ]
        ] ],
        [ "Troubleshooting", "d2/d3f/a01356.html#troubleshooting", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository", "d2/d3f/a01356.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
      ] ]
    ] ],
    [ "C-Menu-UG", "df/d10/a01357.html", null ],
    [ "Changelog", "de/d5c/a01358.html", [
      [ "[Released] - 2026-02-04", "de/d5c/a01358.html#released---2026-02-04", [
        [ "Fixed", "de/d5c/a01358.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "de/d5c/a01358.html#autotoc_md028--2026-02-04", [
        [ "Added", "de/d5c/a01358.html#added", null ]
      ] ]
    ] ],
    [ "exercises", "dc/d4b/a01359.html", [
      [ "Table of Contents", "dc/d4b/a01359.html#table-of-contents-1", [
        [ "Introduction", "dc/d4b/a01359.html#introduction-2", null ],
        [ "Exercise 1: System Configurations", "dc/d4b/a01359.html#exercise-1-system-configurations", [
          [ "SDDM Background Configuration", "dc/d4b/a01359.html#sddm-background-configuration", [
            [ "Requisites", "dc/d4b/a01359.html#requisites", null ]
          ] ],
          [ "Ghostty Configuration", "dc/d4b/a01359.html#ghostty-configuration", null ],
          [ "Alacritty and Kitty", "dc/d4b/a01359.html#alacritty-and-kitty", null ],
          [ "Rustlings Exercises", "dc/d4b/a01359.html#rustlings-exercises", null ]
        ] ]
      ] ]
    ] ],
    [ "extras", "d9/d79/a01360.html", [
      [ "How to get C-Menu", "d9/d79/a01360.html#how-to-get-c-menu-2", [
        [ "Get C-Menu on Github", "d9/d79/a01360.html#get-c-menu-on-github-2", null ],
        [ "Table of Contents", "d9/d79/a01360.html#table-of-contents-2", null ],
        [ "Introduction", "d9/d79/a01360.html#introduction-3", null ],
        [ "Installing Rust", "d9/d79/a01360.html#installing-rust", [
          [ "Installing Rust On Linux and macOS", "d9/d79/a01360.html#installing-rust-on-linux-and-macos", null ]
        ] ],
        [ "About C-Menu and R-Menu", "d9/d79/a01360.html#about-c-menu-and-r-menu", null ],
        [ "Installing Bat", "d9/d79/a01360.html#installing-bat", [
          [ "Bat On Linux", "d9/d79/a01360.html#bat-on-linux", null ],
          [ "Bat On macOS", "d9/d79/a01360.html#bat-on-macos", null ],
          [ "Bat On Windows", "d9/d79/a01360.html#bat-on-windows", null ]
        ] ],
        [ "Installing Ripgrep", "d9/d79/a01360.html#installing-ripgrep", [
          [ "Ripgrep On Linux", "d9/d79/a01360.html#ripgrep-on-linux", null ],
          [ "Ripgrep On macOS", "d9/d79/a01360.html#ripgrep-on-macos", null ],
          [ "Ripgrep On Windows", "d9/d79/a01360.html#ripgrep-on-windows", null ]
        ] ],
        [ "lsd", "d9/d79/a01360.html#lsd", [
          [ "lsd On Linux", "d9/d79/a01360.html#lsd-on-linux", null ],
          [ "lsd On macOS", "d9/d79/a01360.html#lsd-on-macos", null ],
          [ "lsd On Windows", "d9/d79/a01360.html#lsd-on-windows", null ]
        ] ],
        [ "Highlighting", "d9/d79/a01360.html#highlighting", null ],
        [ "Tree-Sitter", "d9/d79/a01360.html#tree-sitter", [
          [ "Tree-Sitter On Linux", "d9/d79/a01360.html#tree-sitter-on-linux", null ],
          [ "Tree-Sitter On macOS", "d9/d79/a01360.html#tree-sitter-on-macos", null ],
          [ "Tree-Sitter On Windows", "d9/d79/a01360.html#tree-sitter-on-windows", null ]
        ] ],
        [ "Tree-Sitter-CLI", "d9/d79/a01360.html#tree-sitter-cli", [
          [ "Tree-Sitter-CLI On Linux", "d9/d79/a01360.html#tree-sitter-cli-on-linux", null ],
          [ "Tree-Sitter-CLI On macOS", "d9/d79/a01360.html#tree-sitter-cli-on-macos", null ],
          [ "Tree-Sitter-CLI On Windows", "d9/d79/a01360.html#tree-sitter-cli-on-windows", null ]
        ] ],
        [ "Tree-Sitter Parsers", "d9/d79/a01360.html#tree-sitter-parsers", [
          [ "Tree-Sitter Parsers On Linux", "d9/d79/a01360.html#tree-sitter-parsers-on-linux", null ],
          [ "Tree-Sitter Parsers On macOS", "d9/d79/a01360.html#tree-sitter-parsers-on-macos", null ],
          [ "Tree-Sitter Parsers On Windows", "d9/d79/a01360.html#tree-sitter-parsers-on-windows", null ],
          [ "Testing Tree-Sitter", "d9/d79/a01360.html#testing-tree-sitter", null ]
        ] ],
        [ "Rustlings", "d9/d79/a01360.html#rustlings", null ],
        [ "Neovim", "d9/d79/a01360.html#neovim", null ],
        [ "Neovim Configuration", "d9/d79/a01360.html#neovim-configuration", [
          [ "Custom Highlights", "d9/d79/a01360.html#custom-highlights", null ],
          [ "Norcalli Colorizer", "d9/d79/a01360.html#norcalli-colorizer", [
            [ "AI Overview of Developer Norcalli", "d9/d79/a01360.html#ai-overview-of-developer-norcalli", null ]
          ] ],
          [ "To Install Norcalli's nvim-colorizer.lua", "d9/d79/a01360.html#to-install-norcallis-nvim-colorizerlua", null ]
        ] ],
        [ "Folke's Snacks.nvim", "d9/d79/a01360.html#folkes-snacksnvim", null ],
        [ "Neovim Linkage to the C-Menu API", "d9/d79/a01360.html#neovim-linkage-to-the-c-menu-api", null ],
        [ "Ghostty", "d9/d79/a01360.html#ghostty", [
          [ "Ghostty On Linux", "d9/d79/a01360.html#ghostty-on-linux", null ],
          [ "Ghostty On macOS", "d9/d79/a01360.html#ghostty-on-macos", null ],
          [ "Ghostty On Windows", "d9/d79/a01360.html#ghostty-on-windows", null ]
        ] ],
        [ "Useful Configurations", "d9/d79/a01360.html#useful-configurations", [
          [ "Alternate Bash Executable", "d9/d79/a01360.html#alternate-bash-executable", null ],
          [ "Shell Configuration", "d9/d79/a01360.html#shell-configuration", null ],
          [ "Customize Your Terminal Emulator", "d9/d79/a01360.html#customize-your-terminal-emulator", [
            [ "Fonts", "d9/d79/a01360.html#fonts", null ],
            [ "Example Terminal Configurations", "d9/d79/a01360.html#example-terminal-configurations", [
              [ "Ghostty Configuration", "d9/d79/a01360.html#ghostty-configuration-1", null ],
              [ "Kitty Configuration", "d9/d79/a01360.html#kitty-configuration", null ],
              [ "Alacritty Configuration", "d9/d79/a01360.html#alacritty-configuration", null ]
            ] ]
          ] ]
        ] ],
        [ "Additional Resources", "d9/d79/a01360.html#additional-resources", [
          [ "Let's Get Rusty", "d9/d79/a01360.html#lets-get-rusty", null ],
          [ "Folke", "d9/d79/a01360.html#folke", null ],
          [ "Other Resources", "d9/d79/a01360.html#other-resources", null ]
        ] ],
        [ "Conclusion", "d9/d79/a01360.html#conclusion", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d9/d79/a01360.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
      ] ]
    ] ],
    [ "FAQ", "d2/d1f/a01361.html", [
      [ "Table of Contents", "d2/d1f/a01361.html#table-of-contents-3", [
        [ "lf is fast, but I rely on find's features", "d2/d1f/a01361.html#lf-is-fast-but-i-rely-on-finds-features", null ],
        [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc", "d2/d1f/a01361.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
        [ "Can lf match files with multiple suffixes", "d2/d1f/a01361.html#can-lf-match-files-with-multiple-suffixes", null ],
        [ "Multiple Executables", "d2/d1f/a01361.html#multiple-executables", null ],
        [ "Static Executables", "d2/d1f/a01361.html#static-executables", null ],
        [ "What's the Icon?", "d2/d1f/a01361.html#whats-the-icon", null ],
        [ "C-Menu's File Structure", "d2/d1f/a01361.html#c-menus-file-structure", null ],
        [ "Some Menu Selections Don't work", "d2/d1f/a01361.html#some-menu-selections-dont-work", [
          [ "Visual Aids Soap-box", "d2/d1f/a01361.html#visual-aids-soap-box", null ]
        ] ],
        [ "High Precision Math With C-Menu and Gawk", "d2/d1f/a01361.html#high-precision-math-with-c-menu-and-gawk", null ],
        [ "TrueColor Support", "d2/d1f/a01361.html#truecolor-support", null ],
        [ "Why View Displays Question Marks", "d2/d1f/a01361.html#why-view-displays-question-marks", null ],
        [ "View - How to Colorize Manual Pages", "d2/d1f/a01361.html#view---how-to-colorize-manual-pages", null ],
        [ "View - How to Colorize HTML Color Codes", "d2/d1f/a01361.html#view---how-to-colorize-html-color-codes", null ],
        [ "View - How to Customize Colors", "d2/d1f/a01361.html#view---how-to-customize-colors", null ],
        [ "Menu, Form, Pick, and View API", "d2/d1f/a01361.html#menu-form-pick-and-view-api", null ],
        [ "View - How to Use Tree-Sitter with View", "d2/d1f/a01361.html#view---how-to-use-tree-sitter-with-view", null ],
        [ "Install Tree-Sitter-CLI", "d2/d1f/a01361.html#install-tree-sitter-cli", [
          [ "Download From Github", "d2/d1f/a01361.html#download-from-github", null ]
        ] ],
        [ "Menu Form - Integrating External Executables", "d2/d1f/a01361.html#menu-form---integrating-external-executables", null ],
        [ "Menu - Using the Installment Loan Calculator", "d2/d1f/a01361.html#menu---using-the-installment-loan-calculator", null ],
        [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "d2/d1f/a01361.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
        [ "Menu Form - Field Delimiters", "d2/d1f/a01361.html#menu-form---field-delimiters", null ],
        [ "Menu Form - Data Types", "d2/d1f/a01361.html#menu-form---data-types", null ],
        [ "Menu - Interprocess Communications", "d2/d1f/a01361.html#menu---interprocess-communications", null ],
        [ "Menu - What Happened to Delete by Inode", "d2/d1f/a01361.html#menu---what-happened-to-delete-by-inode", null ],
        [ "Pick - Selecting Multiple Files", "d2/d1f/a01361.html#pick---selecting-multiple-files", null ],
        [ "Menu lf - Where Are My Header Files?", "d2/d1f/a01361.html#menu-lf---where-are-my-header-files", null ],
        [ "View In a Box Window", "d2/d1f/a01361.html#view-in-a-box-window", null ]
      ] ]
    ] ],
    [ "C-Menu - A User Interface Toolkit", "da/dab/a01362.html", [
      [ "Table of Contents", "da/dab/a01362.html#table-of-contents-4", null ],
      [ "Introduction", "da/dab/a01362.html#introduction-4", null ],
      [ "C-Menu Previews", "da/dab/a01362.html#c-menu-previews", [
        [ "Menu", "da/dab/a01362.html#menu", null ],
        [ "Form", "da/dab/a01362.html#form", null ],
        [ "Pick - Object Selection", "da/dab/a01362.html#pick---object-selection", null ],
        [ "View - A pager for viewing files", "da/dab/a01362.html#view---a-pager-for-viewing-files", null ],
        [ "RSH - A Root Shell Alternative", "da/dab/a01362.html#rsh---a-root-shell-alternative-1", null ],
        [ "lf - A Regular Expression File Finder", "da/dab/a01362.html#lf---a-regular-expression-file-finder-1", null ]
      ] ],
      [ "API", "da/dab/a01362.html#api", [
        [ "Completions in Neovim", "da/dab/a01362.html#completions-in-neovim", null ],
        [ "Performance and Footprint", "da/dab/a01362.html#performance-and-footprint", null ]
      ] ],
      [ "C-Menu INSTALLATION", "da/dab/a01362.html#c-menu-installation", [
        [ "C-Menu Binaries for Linux x86_64", "da/dab/a01362.html#c-menu-binaries-for-linux-x86_64", null ],
        [ "Build C-Menu from Source", "da/dab/a01362.html#build-c-menu-from-source", [
          [ "RSH Static Linking", "da/dab/a01362.html#rsh-static-linking", null ],
          [ "Prerequisites", "da/dab/a01362.html#prerequisites-1", null ],
          [ "Option 1 - Build C-Menu Using CMake Directly", "da/dab/a01362.html#option-1---build-c-menu-using-cmake-directly", null ],
          [ "Option 2 - Build C-Menu with Provided Scripts", "da/dab/a01362.html#option-2---build-c-menu-with-provided-scripts", null ],
          [ "Option 3 - Build C-Menu Using Makefile", "da/dab/a01362.html#option-3---build-c-menu-using-makefile", null ]
        ] ],
        [ "Finish the installation", "da/dab/a01362.html#finish-the-installation", null ]
      ] ]
    ] ],
    [ "OVERVIEW", "dd/d8b/a01363.html", [
      [ "Table of Contents", "dd/d8b/a01363.html#table-of-contents-5", [
        [ "Other C-Menu Documents", "dd/d8b/a01363.html#other-c-menu-documents", null ],
        [ "Get C-Menu on Github", "dd/d8b/a01363.html#get-c-menu-on-github-3", [
          [ "C-Menu Introduction", "dd/d8b/a01363.html#c-menu-introduction", null ]
        ] ],
        [ "<b><em>NEW Features</em></b>", "dd/d8b/a01363.html#_new-features_", [
          [ "<b><em>NEW View Line Numbering</em></b>", "dd/d8b/a01363.html#_new-view-line-numbering_", null ],
          [ "Large Log File in View", "dd/d8b/a01363.html#large-log-file-in-view", null ],
          [ "<b><em>New API Integration With Neovim</em></b>", "dd/d8b/a01363.html#_new-api-integration-with-neovim_", null ],
          [ "<b><em>New Options for lf</em></b>", "dd/d8b/a01363.html#_new-options-for-lf_", null ]
        ] ],
        [ "C-Menu Exercises", "dd/d8b/a01363.html#c-menu-exercises", null ],
        [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "dd/d8b/a01363.html#menu-form-pick-view-c-keys-rsh-and-lf", [
          [ "C-Menu API", "dd/d8b/a01363.html#c-menu-api", null ],
          [ "Elements of C-Menu", "dd/d8b/a01363.html#elements-of-c-menu", null ],
          [ "Key Features", "dd/d8b/a01363.html#key-features", null ],
          [ "Highlights (Pun Intended)", "dd/d8b/a01363.html#highlights-pun-intended", null ],
          [ "Just Do It", "dd/d8b/a01363.html#just-do-it", null ],
          [ "Menu", "dd/d8b/a01363.html#menu-1", null ],
          [ "C-Keys - Diagnose Keyboard/Mouse Input", "dd/d8b/a01363.html#c-keys---diagnose-keyboardmouse-input", null ],
          [ "Pick - A Picker", "dd/d8b/a01363.html#pick---a-picker", null ],
          [ "Form for Data Entry and Editing", "dd/d8b/a01363.html#form-for-data-entry-and-editing", null ],
          [ "Form Key Features", "dd/d8b/a01363.html#form-key-features", null ],
          [ "Form Data Types", "dd/d8b/a01363.html#form-data-types-1", null ],
          [ "Sample Menu Description File", "dd/d8b/a01363.html#sample-menu-description-file", null ],
          [ "View", "dd/d8b/a01363.html#view", [
            [ "Log File With Editor", "dd/d8b/a01363.html#log-file-with-editor", null ],
            [ "Screenshot of the Same File With View", "dd/d8b/a01363.html#screenshot-of-the-same-file-with-view", null ]
          ] ],
          [ "View and Color Manual Pages", "dd/d8b/a01363.html#view-and-color-manual-pages", null ],
          [ "Example Manual Page Using Editor", "dd/d8b/a01363.html#example-manual-page-using-editor", null ],
          [ "Example Manual Page", "dd/d8b/a01363.html#example-manual-page", null ],
          [ "Demand Paged Virtual Address Space", "dd/d8b/a01363.html#demand-paged-virtual-address-space", null ],
          [ "View - Other Features", "dd/d8b/a01363.html#view---other-features", null ],
          [ "3-Channel Gamma Correction", "dd/d8b/a01363.html#autotoc_md3-channel-gamma-correction", null ],
          [ "Gray Gamma", "dd/d8b/a01363.html#gray-gamma", null ],
          [ "RSH", "dd/d8b/a01363.html#rsh", null ],
          [ "Maintaining Security with RSH", "dd/d8b/a01363.html#maintaining-security-with-rsh", null ],
          [ "lf - List Files Using Regular Expressions", "dd/d8b/a01363.html#lf---list-files-using-regular-expressions", null ]
        ] ],
        [ "Features", "dd/d8b/a01363.html#features", null ],
        [ "Configuration", "dd/d8b/a01363.html#configuration", null ],
        [ "MIT License", "dd/d8b/a01363.html#mit-license", null ]
      ] ]
    ] ],
    [ "Performance", "de/d1f/a01364.html", [
      [ "Design Philosophy and Optimizations", "de/d1f/a01364.html#design-philosophy-and-optimizations", [
        [ "C-Menu Launcher", "de/d1f/a01364.html#c-menu-launcher", null ]
      ] ]
    ] ],
    [ "C-Menu ROADMAP", "d7/d81/a01365.html", [
      [ "0.2.9 Tasks to Complete before 0.3.0", "d7/d81/a01365.html#autotoc_md029-tasks-to-complete-before-030", null ],
      [ "0.3.0 On the Horizon", "d7/d81/a01365.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "d7/d81/a01365.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "d7/d81/a01365.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "d7/d81/a01365.html#autotoc_md029---pre-release", [
        [ "Form", "d7/d81/a01365.html#form-1", null ],
        [ "Pick", "d7/d81/a01365.html#pick", null ],
        [ "Exercises - Example Use Cases", "d7/d81/a01365.html#exercises---example-use-cases", null ],
        [ "View", "d7/d81/a01365.html#view-1", null ]
      ] ],
      [ "1.0.0 - Initial Release", "d7/d81/a01365.html#autotoc_md100---initial-release", [
        [ "General", "d7/d81/a01365.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "d7/d81/a01365.html#autotoc_md110---feature-enhancements", [
        [ "General", "d7/d81/a01365.html#general-1", null ]
      ] ]
    ] ],
    [ "snippets", "d6/dfe/a01366.html", [
      [ "Table of Contents", "d6/dfe/a01366.html#table-of-contents-6", [
        [ "C-Menu Desktop Files", "d6/dfe/a01366.html#c-menu-desktop-files", null ],
        [ "C-Menu bashrc Configuration", "d6/dfe/a01366.html#c-menu-bashrc-configuration", [
          [ "Shell Logging", "d6/dfe/a01366.html#shell-logging", null ],
          [ "Prepend Path", "d6/dfe/a01366.html#prepend-path", null ],
          [ "Helpful C-Menu Environment Variables", "d6/dfe/a01366.html#helpful-c-menu-environment-variables", null ],
          [ "Security Through Obscurity", "d6/dfe/a01366.html#security-through-obscurity", null ],
          [ "RSH Helpers", "d6/dfe/a01366.html#rsh-helpers", null ],
          [ "Privilege Indicator Shell Prompts", "d6/dfe/a01366.html#privilege-indicator-shell-prompts", null ],
          [ "Terminal and Editor Settings", "d6/dfe/a01366.html#terminal-and-editor-settings", null ],
          [ "GDB Debugging Setup", "d6/dfe/a01366.html#gdb-debugging-setup", null ],
          [ "If You Can't Stop Typing \"vi\"", "d6/dfe/a01366.html#if-you-cant-stop-typing-vi", null ],
          [ "C-Menu Startup with \"mm\"", "d6/dfe/a01366.html#c-menu-startup-with-mm", null ],
          [ "Curses Escape Delay", "d6/dfe/a01366.html#curses-escape-delay", null ],
          [ "Use lsd or eza instead of ls", "d6/dfe/a01366.html#use-lsd-or-eza-instead-of-ls", null ],
          [ "Locale Settings", "d6/dfe/a01366.html#locale-settings", null ],
          [ "System Specific Environment Variables", "d6/dfe/a01366.html#system-specific-environment-variables", null ]
        ] ],
        [ "C-Menu Configuration", "d6/dfe/a01366.html#c-menu-configuration-1", null ],
        [ "Terminal Configurations", "d6/dfe/a01366.html#terminal-configurations", [
          [ "Ghostty", "d6/dfe/a01366.html#ghostty-1", null ],
          [ "Kitty", "d6/dfe/a01366.html#kitty", null ],
          [ "Alacritty", "d6/dfe/a01366.html#alacritty", null ]
        ] ],
        [ "Tree-Sitter", "d6/dfe/a01366.html#tree-sitter-1", [
          [ "Tree-Sitter config.json", "d6/dfe/a01366.html#tree-sitter-configjson", null ]
        ] ]
      ] ]
    ] ],
    [ "Running Valgrind Against C-Menu", "dd/d86/a01367.html", [
      [ "Background", "dd/d86/a01367.html#background", null ],
      [ "Suppression File", "dd/d86/a01367.html#suppression-file", null ],
      [ "How to Run", "dd/d86/a01367.html#how-to-run", [
        [ "Using the Makefile target (recommended)", "dd/d86/a01367.html#using-the-makefile-target-recommended", null ],
        [ "Running manually", "dd/d86/a01367.html#running-manually", null ]
      ] ],
      [ "Expected Output", "dd/d86/a01367.html#expected-output", null ],
      [ "Reference", "dd/d86/a01367.html#reference", null ]
    ] ],
    [ "Topics", "topics.html", "topics" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d3/ddc/a01142.html#a2be21cb88d7af98768d0defe82a56bbd",
"d6/d1e/a01234.html#a89a54cb87c241686c0c928f7a4e6261f",
"d8/d4e/a01355.html",
"d8/db9/a00725.html#af9b02f9622d677e680eb4cbcc1e85df0",
"dc/d06/a01153.html#ga62d3266bd187c1e3cc267b6cbb60982e",
"dd/de9/a01182.html#a3ca9082887655a9da0195249d2b13455",
"globals_func.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';