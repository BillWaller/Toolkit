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
    [ "C-Menu README", "index.html", "index" ],
    [ "API", "d4/dad/a01353.html", [
      [ "How to get C-Menu", "d4/dad/a01353.html#how-to-get-c-menu", [
        [ "Get C-Menu on Github", "d4/dad/a01353.html#get-c-menu-on-github", null ],
        [ "Introduction", "d4/dad/a01353.html#introduction", null ],
        [ "API Organization", "d4/dad/a01353.html#api-organization", [
          [ "C-Menu Header Files", "d4/dad/a01353.html#c-menu-header-files", [
            [ "include/cm.h", "d4/dad/a01353.html#includecmh", null ],
            [ "include/common.h", "d4/dad/a01353.html#includecommonh", null ],
            [ "include/menu.h, form.h, pick.h, and view.h", "d4/dad/a01353.html#includemenuh-formh-pickh-and-viewh", null ],
            [ "include/version.h and version.h", "d4/dad/a01353.html#includeversionh-and-versionh", null ],
            [ "Version Compatibility", "d4/dad/a01353.html#version-compatibility", null ],
            [ "Roadmap for API Documentation and User Guide", "d4/dad/a01353.html#roadmap-for-api-documentation-and-user-guide", null ],
            [ "Documentation", "d4/dad/a01353.html#documentation", null ]
          ] ]
        ] ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d4/dad/a01353.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
      ] ]
    ] ],
    [ "C-Menu-Addendum", "d7/dc4/a01354.html", [
      [ "How to get C-Menu", "d7/dc4/a01354.html#how-to-get-c-menu-1", [
        [ "Get C-Menu on Github", "d7/dc4/a01354.html#get-c-menu-on-github-1", null ],
        [ "Table of Contents", "d7/dc4/a01354.html#table-of-contents", null ],
        [ "Introduction", "d7/dc4/a01354.html#introduction-1", null ],
        [ "Prerequisites", "d7/dc4/a01354.html#prerequisites", [
          [ "Not Required, But Recommended", "d7/dc4/a01354.html#not-required-but-recommended", null ]
        ] ],
        [ "Getting Started", "d7/dc4/a01354.html#getting-started", [
          [ "C-Menu Environment Variables", "d7/dc4/a01354.html#c-menu-environment-variables", null ],
          [ "C-Menu File Layout", "d7/dc4/a01354.html#c-menu-file-layout", null ],
          [ "RSH Safety Features", "d7/dc4/a01354.html#rsh-safety-features", null ],
          [ "Using RSH", "d7/dc4/a01354.html#using-rsh", null ],
          [ "RSH - A Use Case", "d7/dc4/a01354.html#rsh---a-use-case", null ]
        ] ],
        [ "Starting C-Menu", "d7/dc4/a01354.html#starting-c-menu", null ],
        [ "C-Menu configuration", "d7/dc4/a01354.html#c-menu-configuration", null ],
        [ "How C-Menu Menu Works", "d7/dc4/a01354.html#how-c-menu-menu-works", [
          [ "C-Menu Example Applications Menu", "d7/dc4/a01354.html#c-menu-example-applications-menu", null ],
          [ "Menu Description File Format", "d7/dc4/a01354.html#menu-description-file-format", null ],
          [ "Form field editor", "d7/dc4/a01354.html#form-field-editor", [
            [ "Form Line Type Specifiers", "d7/dc4/a01354.html#form-line-type-specifiers", null ],
            [ "Form Field Delimiters", "d7/dc4/a01354.html#form-field-delimiters", null ],
            [ "Form Data Types", "d7/dc4/a01354.html#form-data-types", null ],
            [ "Form Line Syntax", "d7/dc4/a01354.html#form-line-syntax", null ],
            [ "Form Options", "d7/dc4/a01354.html#form-options", null ]
          ] ]
        ] ],
        [ "C-Menu Pick", "d7/dc4/a01354.html#c-menu-pick", [
          [ "Pick Usage", "d7/dc4/a01354.html#pick-usage", [
            [ "Selecting Items", "d7/dc4/a01354.html#selecting-items", null ]
          ] ],
          [ "Pick Options", "d7/dc4/a01354.html#pick-options", null ]
        ] ],
        [ "C-Menu View", "d7/dc4/a01354.html#c-menu-view", [
          [ "View Options", "d7/dc4/a01354.html#view-options", [
            [ "View Navigation", "d7/dc4/a01354.html#view-navigation", null ],
            [ "Searching Forward", "d7/dc4/a01354.html#searching-forward", null ],
            [ "Searching Backward", "d7/dc4/a01354.html#searching-backward", null ],
            [ "Horizontal Scrolling", "d7/dc4/a01354.html#horizontal-scrolling", null ],
            [ "Motion Keys", "d7/dc4/a01354.html#motion-keys", null ]
          ] ],
          [ "C-Menu Options", "d7/dc4/a01354.html#c-menu-options", null ],
          [ "C-Menu configuration file example", "d7/dc4/a01354.html#c-menu-configuration-file-example", null ],
          [ "lf", "d7/dc4/a01354.html#lf", null ],
          [ "whence", "d7/dc4/a01354.html#whence", null ]
        ] ],
        [ "Troubleshooting", "d7/dc4/a01354.html#troubleshooting", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository", "d7/dc4/a01354.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
      ] ]
    ] ],
    [ "C-Menu-UG", "d8/d4e/a01355.html", null ],
    [ "Changelog", "d2/d3f/a01356.html", [
      [ "[Released] - 2026-02-04", "d2/d3f/a01356.html#released---2026-02-04", [
        [ "Fixed", "d2/d3f/a01356.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "d2/d3f/a01356.html#autotoc_md028--2026-02-04", [
        [ "Added", "d2/d3f/a01356.html#added", null ]
      ] ]
    ] ],
    [ "exercises", "df/d10/a01357.html", [
      [ "Table of Contents", "df/d10/a01357.html#table-of-contents-1", [
        [ "Introduction", "df/d10/a01357.html#introduction-2", null ],
        [ "Exercise 1: System Configurations", "df/d10/a01357.html#exercise-1-system-configurations", [
          [ "SDDM Background Configuration", "df/d10/a01357.html#sddm-background-configuration", [
            [ "Requisites", "df/d10/a01357.html#requisites", null ]
          ] ],
          [ "Ghostty Configuration", "df/d10/a01357.html#ghostty-configuration", null ],
          [ "Alacritty and Kitty", "df/d10/a01357.html#alacritty-and-kitty", null ],
          [ "Rustlings Exercises", "df/d10/a01357.html#rustlings-exercises", null ]
        ] ]
      ] ]
    ] ],
    [ "extras", "de/d5c/a01358.html", [
      [ "How to get C-Menu", "de/d5c/a01358.html#how-to-get-c-menu-2", [
        [ "Get C-Menu on Github", "de/d5c/a01358.html#get-c-menu-on-github-2", null ],
        [ "Table of Contents", "de/d5c/a01358.html#table-of-contents-2", null ],
        [ "Introduction", "de/d5c/a01358.html#introduction-3", null ],
        [ "Installing Rust", "de/d5c/a01358.html#installing-rust", [
          [ "Installing Rust On Linux and macOS", "de/d5c/a01358.html#installing-rust-on-linux-and-macos", null ]
        ] ],
        [ "About C-Menu and R-Menu", "de/d5c/a01358.html#about-c-menu-and-r-menu", null ],
        [ "Installing Bat", "de/d5c/a01358.html#installing-bat", [
          [ "Bat On Linux", "de/d5c/a01358.html#bat-on-linux", null ],
          [ "Bat On macOS", "de/d5c/a01358.html#bat-on-macos", null ],
          [ "Bat On Windows", "de/d5c/a01358.html#bat-on-windows", null ]
        ] ],
        [ "Installing Ripgrep", "de/d5c/a01358.html#installing-ripgrep", [
          [ "Ripgrep On Linux", "de/d5c/a01358.html#ripgrep-on-linux", null ],
          [ "Ripgrep On macOS", "de/d5c/a01358.html#ripgrep-on-macos", null ],
          [ "Ripgrep On Windows", "de/d5c/a01358.html#ripgrep-on-windows", null ]
        ] ],
        [ "lsd", "de/d5c/a01358.html#lsd", [
          [ "lsd On Linux", "de/d5c/a01358.html#lsd-on-linux", null ],
          [ "lsd On macOS", "de/d5c/a01358.html#lsd-on-macos", null ],
          [ "lsd On Windows", "de/d5c/a01358.html#lsd-on-windows", null ]
        ] ],
        [ "Highlighting", "de/d5c/a01358.html#highlighting", null ],
        [ "Tree-Sitter", "de/d5c/a01358.html#tree-sitter", [
          [ "Tree-Sitter On Linux", "de/d5c/a01358.html#tree-sitter-on-linux", null ],
          [ "Tree-Sitter On macOS", "de/d5c/a01358.html#tree-sitter-on-macos", null ],
          [ "Tree-Sitter On Windows", "de/d5c/a01358.html#tree-sitter-on-windows", null ]
        ] ],
        [ "Tree-Sitter-CLI", "de/d5c/a01358.html#tree-sitter-cli", [
          [ "Tree-Sitter-CLI On Linux", "de/d5c/a01358.html#tree-sitter-cli-on-linux", null ],
          [ "Tree-Sitter-CLI On macOS", "de/d5c/a01358.html#tree-sitter-cli-on-macos", null ],
          [ "Tree-Sitter-CLI On Windows", "de/d5c/a01358.html#tree-sitter-cli-on-windows", null ]
        ] ],
        [ "Tree-Sitter Parsers", "de/d5c/a01358.html#tree-sitter-parsers", [
          [ "Tree-Sitter Parsers On Linux", "de/d5c/a01358.html#tree-sitter-parsers-on-linux", null ],
          [ "Tree-Sitter Parsers On macOS", "de/d5c/a01358.html#tree-sitter-parsers-on-macos", null ],
          [ "Tree-Sitter Parsers On Windows", "de/d5c/a01358.html#tree-sitter-parsers-on-windows", null ],
          [ "Testing Tree-Sitter", "de/d5c/a01358.html#testing-tree-sitter", null ]
        ] ],
        [ "Rustlings", "de/d5c/a01358.html#rustlings", null ],
        [ "Neovim", "de/d5c/a01358.html#neovim", null ],
        [ "Neovim Configuration", "de/d5c/a01358.html#neovim-configuration", [
          [ "Custom Highlights", "de/d5c/a01358.html#custom-highlights", null ],
          [ "Norcalli Colorizer", "de/d5c/a01358.html#norcalli-colorizer", [
            [ "AI Overview of Developer Norcalli", "de/d5c/a01358.html#ai-overview-of-developer-norcalli", null ]
          ] ],
          [ "To Install Norcalli's nvim-colorizer.lua", "de/d5c/a01358.html#to-install-norcallis-nvim-colorizerlua", null ]
        ] ],
        [ "Folke's Snacks.nvim", "de/d5c/a01358.html#folkes-snacksnvim", null ],
        [ "Neovim Linkage to the C-Menu API", "de/d5c/a01358.html#neovim-linkage-to-the-c-menu-api", null ],
        [ "Ghostty", "de/d5c/a01358.html#ghostty", [
          [ "Ghostty On Linux", "de/d5c/a01358.html#ghostty-on-linux", null ],
          [ "Ghostty On macOS", "de/d5c/a01358.html#ghostty-on-macos", null ],
          [ "Ghostty On Windows", "de/d5c/a01358.html#ghostty-on-windows", null ]
        ] ],
        [ "Useful Configurations", "de/d5c/a01358.html#useful-configurations", [
          [ "Alternate Bash Executable", "de/d5c/a01358.html#alternate-bash-executable", null ],
          [ "Shell Configuration", "de/d5c/a01358.html#shell-configuration", null ],
          [ "Customize Your Terminal Emulator", "de/d5c/a01358.html#customize-your-terminal-emulator", [
            [ "Fonts", "de/d5c/a01358.html#fonts", null ],
            [ "Example Terminal Configurations", "de/d5c/a01358.html#example-terminal-configurations", [
              [ "Ghostty Configuration", "de/d5c/a01358.html#ghostty-configuration-1", null ],
              [ "Kitty Configuration", "de/d5c/a01358.html#kitty-configuration", null ],
              [ "Alacritty Configuration", "de/d5c/a01358.html#alacritty-configuration", null ]
            ] ]
          ] ]
        ] ],
        [ "Additional Resources", "de/d5c/a01358.html#additional-resources", [
          [ "Let's Get Rusty", "de/d5c/a01358.html#lets-get-rusty", null ],
          [ "Folke", "de/d5c/a01358.html#folke", null ],
          [ "Other Resources", "de/d5c/a01358.html#other-resources", null ]
        ] ],
        [ "Conclusion", "de/d5c/a01358.html#conclusion", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "de/d5c/a01358.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
      ] ]
    ] ],
    [ "FAQ", "dc/d4b/a01359.html", [
      [ "Table of Contents", "dc/d4b/a01359.html#table-of-contents-3", [
        [ "lf is fast, but I rely on find's features", "dc/d4b/a01359.html#lf-is-fast-but-i-rely-on-finds-features", null ],
        [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc", "dc/d4b/a01359.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
        [ "Can lf match files with multiple suffixes", "dc/d4b/a01359.html#can-lf-match-files-with-multiple-suffixes", null ],
        [ "Multiple Executables", "dc/d4b/a01359.html#multiple-executables", null ],
        [ "Static Executables", "dc/d4b/a01359.html#static-executables", null ],
        [ "What's the Icon?", "dc/d4b/a01359.html#whats-the-icon", null ],
        [ "C-Menu's File Structure", "dc/d4b/a01359.html#c-menus-file-structure", null ],
        [ "Some Menu Selections Don't work", "dc/d4b/a01359.html#some-menu-selections-dont-work", [
          [ "Visual Aids Soap-box", "dc/d4b/a01359.html#visual-aids-soap-box", null ]
        ] ],
        [ "High Precision Math With C-Menu and Gawk", "dc/d4b/a01359.html#high-precision-math-with-c-menu-and-gawk", null ],
        [ "TrueColor Support", "dc/d4b/a01359.html#truecolor-support", null ],
        [ "Why View Displays Question Marks", "dc/d4b/a01359.html#why-view-displays-question-marks", null ],
        [ "View - How to Colorize Manual Pages", "dc/d4b/a01359.html#view---how-to-colorize-manual-pages", null ],
        [ "View - How to Colorize HTML Color Codes", "dc/d4b/a01359.html#view---how-to-colorize-html-color-codes", null ],
        [ "View - How to Customize Colors", "dc/d4b/a01359.html#view---how-to-customize-colors", null ],
        [ "Menu, Form, Pick, and View API", "dc/d4b/a01359.html#menu-form-pick-and-view-api", null ],
        [ "View - How to Use Tree-Sitter with View", "dc/d4b/a01359.html#view---how-to-use-tree-sitter-with-view", null ],
        [ "Install Tree-Sitter-CLI", "dc/d4b/a01359.html#install-tree-sitter-cli", [
          [ "Download From Github", "dc/d4b/a01359.html#download-from-github", null ]
        ] ],
        [ "Menu Form - Integrating External Executables", "dc/d4b/a01359.html#menu-form---integrating-external-executables", null ],
        [ "Menu - Using the Installment Loan Calculator", "dc/d4b/a01359.html#menu---using-the-installment-loan-calculator", null ],
        [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "dc/d4b/a01359.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
        [ "Menu Form - Field Delimiters", "dc/d4b/a01359.html#menu-form---field-delimiters", null ],
        [ "Menu Form - Data Types", "dc/d4b/a01359.html#menu-form---data-types", null ],
        [ "Menu - Interprocess Communications", "dc/d4b/a01359.html#menu---interprocess-communications", null ],
        [ "Menu - What Happened to Delete by Inode", "dc/d4b/a01359.html#menu---what-happened-to-delete-by-inode", null ],
        [ "Pick - Selecting Multiple Files", "dc/d4b/a01359.html#pick---selecting-multiple-files", null ],
        [ "Menu lf - Where Are My Header Files?", "dc/d4b/a01359.html#menu-lf---where-are-my-header-files", null ],
        [ "View In a Box Window", "dc/d4b/a01359.html#view-in-a-box-window", null ]
      ] ]
    ] ],
    [ "DATE/TIME CONUNDRUM", "d9/d79/a01360.html", [
      [ "Overview", "d9/d79/a01360.html#overview", null ],
      [ "Correct workaround", "d9/d79/a01360.html#correct-workaround", null ],
      [ "Why the previous results looked contradictory", "d9/d79/a01360.html#why-the-previous-results-looked-contradictory", null ],
      [ "Important note about <span class=\"tt\">gmtime_r()</span>", "d9/d79/a01360.html#important-note-about-gmtime_r", null ],
      [ "Recommended helper", "d9/d79/a01360.html#recommended-helper", null ],
      [ "Revised interpretation of the original test cases", "d9/d79/a01360.html#revised-interpretation-of-the-original-test-cases", null ],
      [ "Original demonstration code", "d9/d79/a01360.html#original-demonstration-code", null ]
    ] ],
    [ "C-Menu - A User Interface Toolkit", "d2/d1f/a01361.html", [
      [ "Table of Contents", "d2/d1f/a01361.html#table-of-contents-4", null ],
      [ "Introduction", "d2/d1f/a01361.html#introduction-4", null ],
      [ "C-Menu Previews", "d2/d1f/a01361.html#c-menu-previews", [
        [ "Menu", "d2/d1f/a01361.html#menu", null ],
        [ "Form", "d2/d1f/a01361.html#form", null ],
        [ "Pick - Object Selection", "d2/d1f/a01361.html#pick---object-selection", null ],
        [ "View - A pager for viewing files", "d2/d1f/a01361.html#view---a-pager-for-viewing-files", null ],
        [ "RSH - A Root Shell Alternative", "d2/d1f/a01361.html#rsh---a-root-shell-alternative-1", null ],
        [ "lf - A Regular Expression File Finder", "d2/d1f/a01361.html#lf---a-regular-expression-file-finder-1", null ]
      ] ],
      [ "API", "d2/d1f/a01361.html#api", [
        [ "Completions in Neovim", "d2/d1f/a01361.html#completions-in-neovim", null ],
        [ "Performance and Footprint", "d2/d1f/a01361.html#performance-and-footprint", null ]
      ] ],
      [ "C-Menu INSTALLATION", "d2/d1f/a01361.html#c-menu-installation", [
        [ "C-Menu Binaries for Linux x86_64", "d2/d1f/a01361.html#c-menu-binaries-for-linux-x86_64", null ],
        [ "Build C-Menu from Source", "d2/d1f/a01361.html#build-c-menu-from-source", [
          [ "RSH Static Linking", "d2/d1f/a01361.html#rsh-static-linking", null ],
          [ "Prerequisites", "d2/d1f/a01361.html#prerequisites-1", null ],
          [ "Option 1 - Build C-Menu Using CMake Directly", "d2/d1f/a01361.html#option-1---build-c-menu-using-cmake-directly", null ],
          [ "Option 2 - Build C-Menu with Provided Scripts", "d2/d1f/a01361.html#option-2---build-c-menu-with-provided-scripts", null ],
          [ "Option 3 - Build C-Menu Using Makefile", "d2/d1f/a01361.html#option-3---build-c-menu-using-makefile", null ]
        ] ],
        [ "Finish the installation", "d2/d1f/a01361.html#finish-the-installation", null ]
      ] ]
    ] ],
    [ "lf", "da/dab/a01362.html", [
      [ "NAME", "da/dab/a01362.html#name", null ],
      [ "SYNOPSIS", "da/dab/a01362.html#synopsis", null ],
      [ "DESCRIPTION", "da/dab/a01362.html#description", null ],
      [ "OPTIONS", "da/dab/a01362.html#options", null ],
      [ "EXAMPLES", "da/dab/a01362.html#examples-1", null ],
      [ "AUTHOR", "da/dab/a01362.html#author", null ],
      [ "REPORTING BUGS", "da/dab/a01362.html#reporting-bugs", null ],
      [ "COPYRIGHT", "da/dab/a01362.html#copyright", null ],
      [ "LICENSE", "da/dab/a01362.html#license", null ],
      [ "SEE ALSO", "da/dab/a01362.html#see-also", null ]
    ] ],
    [ "OVERVIEW", "dd/d8b/a01363.html", [
      [ "Table of Contents", "dd/d8b/a01363.html#table-of-contents-5", [
        [ "Other C-Menu Documents", "dd/d8b/a01363.html#other-c-menu-documents", null ],
        [ "Get C-Menu on Github", "dd/d8b/a01363.html#get-c-menu-on-github-3", [
          [ "C-Menu Introduction", "dd/d8b/a01363.html#c-menu-introduction", null ],
          [ "View Line Numbering", "dd/d8b/a01363.html#view-line-numbering", null ],
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
          [ "Form Data Types", "dd/d8b/a01363.html#form-data-types-2", null ],
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
    [ "C-Menu README", "d7/d81/a01365.html", [
      [ "New Features for lf", "d7/d81/a01365.html#new-features-for-lf", [
        [ "Installment Loan Calculator - Built with C-Menu", "d7/d81/a01365.html#installment-loan-calculator---built-with-c-menu", null ]
      ] ],
      [ "C-Menu Introduction", "d7/d81/a01365.html#c-menu-introduction-1", null ],
      [ "Table of Contents", "d7/d81/a01365.html#table-of-contents-6", null ],
      [ "Why C-Menu", "d7/d81/a01365.html#why-c-menu", null ],
      [ "Components", "d7/d81/a01365.html#components", null ],
      [ "Quick Start", "d7/d81/a01365.html#quick-start", null ],
      [ "Core Concepts", "d7/d81/a01365.html#core-concepts", null ],
      [ "Examples", "d7/d81/a01365.html#examples-2", [
        [ "Menu", "d7/d81/a01365.html#menu-2", null ],
        [ "Form", "d7/d81/a01365.html#form-1", null ],
        [ "Pick", "d7/d81/a01365.html#pick", null ],
        [ "View", "d7/d81/a01365.html#view-1", null ],
        [ "lf", "d7/d81/a01365.html#lf-1", null ],
        [ "rsh", "d7/d81/a01365.html#rsh-1", null ]
      ] ],
      [ "Documentation", "d7/d81/a01365.html#documentation-1", null ],
      [ "Configuration", "d7/d81/a01365.html#configuration-1", null ],
      [ "Platform and Requirements", "d7/d81/a01365.html#platform-and-requirements", null ],
      [ "Security Notes", "d7/d81/a01365.html#security-notes", null ],
      [ "Why the Design Works", "d7/d81/a01365.html#why-the-design-works", null ],
      [ "Contributing", "d7/d81/a01365.html#contributing", null ]
    ] ],
    [ "C-Menu ROADMAP", "d6/dfe/a01366.html", [
      [ "0.2.9 Tasks to Complete before 0.3.0", "d6/dfe/a01366.html#autotoc_md029-tasks-to-complete-before-030", null ],
      [ "0.3.0 On the Horizon", "d6/dfe/a01366.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "d6/dfe/a01366.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "d6/dfe/a01366.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "d6/dfe/a01366.html#autotoc_md029---pre-release", [
        [ "Form", "d6/dfe/a01366.html#form-2", null ],
        [ "Pick", "d6/dfe/a01366.html#pick-1", null ],
        [ "Exercises - Example Use Cases", "d6/dfe/a01366.html#exercises---example-use-cases", null ],
        [ "View", "d6/dfe/a01366.html#view-2", null ]
      ] ],
      [ "1.0.0 - Initial Release", "d6/dfe/a01366.html#autotoc_md100---initial-release", [
        [ "General", "d6/dfe/a01366.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "d6/dfe/a01366.html#autotoc_md110---feature-enhancements", [
        [ "General", "d6/dfe/a01366.html#general-1", null ]
      ] ]
    ] ],
    [ "snippets", "dd/d86/a01367.html", [
      [ "Table of Contents", "dd/d86/a01367.html#table-of-contents-7", [
        [ "C-Menu Desktop Files", "dd/d86/a01367.html#c-menu-desktop-files", null ],
        [ "C-Menu bashrc Configuration", "dd/d86/a01367.html#c-menu-bashrc-configuration", [
          [ "Shell Logging", "dd/d86/a01367.html#shell-logging", null ],
          [ "Prepend Path", "dd/d86/a01367.html#prepend-path", null ],
          [ "Helpful C-Menu Environment Variables", "dd/d86/a01367.html#helpful-c-menu-environment-variables", null ],
          [ "Security Through Obscurity", "dd/d86/a01367.html#security-through-obscurity", null ],
          [ "RSH Helpers", "dd/d86/a01367.html#rsh-helpers", null ],
          [ "Privilege Indicator Shell Prompts", "dd/d86/a01367.html#privilege-indicator-shell-prompts", null ],
          [ "Terminal and Editor Settings", "dd/d86/a01367.html#terminal-and-editor-settings", null ],
          [ "GDB Debugging Setup", "dd/d86/a01367.html#gdb-debugging-setup", null ],
          [ "If You Can't Stop Typing \"vi\"", "dd/d86/a01367.html#if-you-cant-stop-typing-vi", null ],
          [ "C-Menu Startup with \"mm\"", "dd/d86/a01367.html#c-menu-startup-with-mm", null ],
          [ "Curses Escape Delay", "dd/d86/a01367.html#curses-escape-delay", null ],
          [ "Use lsd or eza instead of ls", "dd/d86/a01367.html#use-lsd-or-eza-instead-of-ls", null ],
          [ "Locale Settings", "dd/d86/a01367.html#locale-settings", null ],
          [ "System Specific Environment Variables", "dd/d86/a01367.html#system-specific-environment-variables", null ]
        ] ],
        [ "C-Menu Configuration", "dd/d86/a01367.html#c-menu-configuration-1", null ],
        [ "Terminal Configurations", "dd/d86/a01367.html#terminal-configurations", [
          [ "Ghostty", "dd/d86/a01367.html#ghostty-1", null ],
          [ "Kitty", "dd/d86/a01367.html#kitty", null ],
          [ "Alacritty", "dd/d86/a01367.html#alacritty", null ]
        ] ],
        [ "Tree-Sitter", "dd/d86/a01367.html#tree-sitter-1", [
          [ "Tree-Sitter config.json", "dd/d86/a01367.html#tree-sitter-configjson", null ]
        ] ]
      ] ]
    ] ],
    [ "Running Valgrind Against C-Menu", "dd/d0c/a01368.html", [
      [ "Background", "dd/d0c/a01368.html#background", null ],
      [ "Suppression File", "dd/d0c/a01368.html#suppression-file", null ],
      [ "How to Run", "dd/d0c/a01368.html#how-to-run", [
        [ "Using the Makefile target (recommended)", "dd/d0c/a01368.html#using-the-makefile-target-recommended", null ],
        [ "Running manually", "dd/d0c/a01368.html#running-manually", null ]
      ] ],
      [ "Expected Output", "dd/d0c/a01368.html#expected-output", null ],
      [ "Reference", "dd/d0c/a01368.html#reference", null ]
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
"d2/df3/a01085.html#ac2aed50ae3ec0cf7176c57f7d96f6df0",
"d6/d27/a01163.html#ga8dd32c1a4c961ec715f63625a6f87b61",
"d8/db9/a00725.html#a1bd8f5499dde00a4810e8cc7dd44f414",
"d9/d25/a01157.html#ga21ebe9713e3b003715a7a2c3b64cbf55",
"db/d42/a01220.html#a1a7dfb55a3a50da02ac9ec993ef9d324",
"dd/d8b/a01363.html#c-keys---diagnose-keyboardmouse-input",
"functions_c.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';