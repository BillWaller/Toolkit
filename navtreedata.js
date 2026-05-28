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
    [ "API", "d9/d79/a01360.html", [
      [ "How to get C-Menu", "d9/d79/a01360.html#how-to-get-c-menu", [
        [ "Get C-Menu on Github", "d9/d79/a01360.html#get-c-menu-on-github", null ],
        [ "Introduction", "d9/d79/a01360.html#introduction", null ],
        [ "API Organization", "d9/d79/a01360.html#api-organization", [
          [ "C-Menu Header Files", "d9/d79/a01360.html#c-menu-header-files", [
            [ "include/cm.h", "d9/d79/a01360.html#includecmh", null ],
            [ "include/common.h", "d9/d79/a01360.html#includecommonh", null ],
            [ "include/menu.h, form.h, pick.h, and view.h", "d9/d79/a01360.html#includemenuh-formh-pickh-and-viewh", null ],
            [ "include/version.h and version.h", "d9/d79/a01360.html#includeversionh-and-versionh", null ],
            [ "Version Compatibility", "d9/d79/a01360.html#version-compatibility", null ],
            [ "Roadmap for API Documentation and User Guide", "d9/d79/a01360.html#roadmap-for-api-documentation-and-user-guide", null ],
            [ "Documentation", "d9/d79/a01360.html#documentation", null ]
          ] ]
        ] ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d9/d79/a01360.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
      ] ]
    ] ],
    [ "C-Menu-Addendum", "d2/d1f/a01361.html", [
      [ "How to get C-Menu", "d2/d1f/a01361.html#how-to-get-c-menu-1", [
        [ "Get C-Menu on Github", "d2/d1f/a01361.html#get-c-menu-on-github-1", null ],
        [ "Table of Contents", "d2/d1f/a01361.html#table-of-contents", null ],
        [ "Introduction", "d2/d1f/a01361.html#introduction-1", null ],
        [ "Prerequisites", "d2/d1f/a01361.html#prerequisites", [
          [ "Not Required, But Recommended", "d2/d1f/a01361.html#not-required-but-recommended", null ]
        ] ],
        [ "Getting Started", "d2/d1f/a01361.html#getting-started", [
          [ "C-Menu Environment Variables", "d2/d1f/a01361.html#c-menu-environment-variables", null ],
          [ "C-Menu File Layout", "d2/d1f/a01361.html#c-menu-file-layout", null ],
          [ "RSH Safety Features", "d2/d1f/a01361.html#rsh-safety-features", null ],
          [ "Using RSH", "d2/d1f/a01361.html#using-rsh", null ],
          [ "RSH - A Use Case", "d2/d1f/a01361.html#rsh---a-use-case", null ]
        ] ],
        [ "Starting C-Menu", "d2/d1f/a01361.html#starting-c-menu", null ],
        [ "C-Menu configuration", "d2/d1f/a01361.html#c-menu-configuration", null ],
        [ "How C-Menu Menu Works", "d2/d1f/a01361.html#how-c-menu-menu-works", [
          [ "C-Menu Example Applications Menu", "d2/d1f/a01361.html#c-menu-example-applications-menu", null ],
          [ "Menu Description File Format", "d2/d1f/a01361.html#menu-description-file-format", null ],
          [ "Form field editor", "d2/d1f/a01361.html#form-field-editor", [
            [ "Form Line Type Specifiers", "d2/d1f/a01361.html#form-line-type-specifiers", null ],
            [ "Form Field Delimiters", "d2/d1f/a01361.html#form-field-delimiters", null ],
            [ "Form Data Types", "d2/d1f/a01361.html#form-data-types", null ],
            [ "Form Line Syntax", "d2/d1f/a01361.html#form-line-syntax", null ],
            [ "Form Options", "d2/d1f/a01361.html#form-options", null ]
          ] ]
        ] ],
        [ "C-Menu Pick", "d2/d1f/a01361.html#c-menu-pick", [
          [ "Pick Usage", "d2/d1f/a01361.html#pick-usage", [
            [ "Selecting Items", "d2/d1f/a01361.html#selecting-items", null ]
          ] ],
          [ "Pick Options", "d2/d1f/a01361.html#pick-options", null ]
        ] ],
        [ "C-Menu View", "d2/d1f/a01361.html#c-menu-view", [
          [ "View Options", "d2/d1f/a01361.html#view-options", [
            [ "View Navigation", "d2/d1f/a01361.html#view-navigation", null ],
            [ "Searching Forward", "d2/d1f/a01361.html#searching-forward", null ],
            [ "Searching Backward", "d2/d1f/a01361.html#searching-backward", null ],
            [ "Horizontal Scrolling", "d2/d1f/a01361.html#horizontal-scrolling", null ],
            [ "Motion Keys", "d2/d1f/a01361.html#motion-keys", null ]
          ] ],
          [ "C-Menu Options", "d2/d1f/a01361.html#c-menu-options", null ],
          [ "C-Menu configuration file example", "d2/d1f/a01361.html#c-menu-configuration-file-example", null ],
          [ "lf", "d2/d1f/a01361.html#lf", null ],
          [ "whence", "d2/d1f/a01361.html#whence", null ]
        ] ],
        [ "Troubleshooting", "d2/d1f/a01361.html#troubleshooting", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository", "d2/d1f/a01361.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
      ] ]
    ] ],
    [ "C-Menu-UG", "da/dab/a01362.html", null ],
    [ "Changelog", "dd/d8b/a01363.html", [
      [ "[Released] - 2026-02-04", "dd/d8b/a01363.html#released---2026-02-04", [
        [ "Fixed", "dd/d8b/a01363.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "dd/d8b/a01363.html#autotoc_md028--2026-02-04", [
        [ "Added", "dd/d8b/a01363.html#added", null ]
      ] ]
    ] ],
    [ "exercises", "de/d1f/a01364.html", [
      [ "Table of Contents", "de/d1f/a01364.html#table-of-contents-1", [
        [ "Introduction", "de/d1f/a01364.html#introduction-2", null ],
        [ "Exercise 1: System Configurations", "de/d1f/a01364.html#exercise-1-system-configurations", [
          [ "SDDM Background Configuration", "de/d1f/a01364.html#sddm-background-configuration", [
            [ "Requisites", "de/d1f/a01364.html#requisites", null ]
          ] ],
          [ "Ghostty Configuration", "de/d1f/a01364.html#ghostty-configuration", null ],
          [ "Alacritty and Kitty", "de/d1f/a01364.html#alacritty-and-kitty", null ],
          [ "Rustlings Exercises", "de/d1f/a01364.html#rustlings-exercises", null ]
        ] ]
      ] ]
    ] ],
    [ "extras", "d7/d81/a01365.html", [
      [ "How to get C-Menu", "d7/d81/a01365.html#how-to-get-c-menu-2", [
        [ "Get C-Menu on Github", "d7/d81/a01365.html#get-c-menu-on-github-2", null ],
        [ "Table of Contents", "d7/d81/a01365.html#table-of-contents-2", null ],
        [ "Introduction", "d7/d81/a01365.html#introduction-3", null ],
        [ "Installing Rust", "d7/d81/a01365.html#installing-rust", [
          [ "Installing Rust On Linux and macOS", "d7/d81/a01365.html#installing-rust-on-linux-and-macos", null ]
        ] ],
        [ "About C-Menu and R-Menu", "d7/d81/a01365.html#about-c-menu-and-r-menu", null ],
        [ "Installing Bat", "d7/d81/a01365.html#installing-bat", [
          [ "Bat On Linux", "d7/d81/a01365.html#bat-on-linux", null ],
          [ "Bat On macOS", "d7/d81/a01365.html#bat-on-macos", null ],
          [ "Bat On Windows", "d7/d81/a01365.html#bat-on-windows", null ]
        ] ],
        [ "Installing Ripgrep", "d7/d81/a01365.html#installing-ripgrep", [
          [ "Ripgrep On Linux", "d7/d81/a01365.html#ripgrep-on-linux", null ],
          [ "Ripgrep On macOS", "d7/d81/a01365.html#ripgrep-on-macos", null ],
          [ "Ripgrep On Windows", "d7/d81/a01365.html#ripgrep-on-windows", null ]
        ] ],
        [ "lsd", "d7/d81/a01365.html#lsd", [
          [ "lsd On Linux", "d7/d81/a01365.html#lsd-on-linux", null ],
          [ "lsd On macOS", "d7/d81/a01365.html#lsd-on-macos", null ],
          [ "lsd On Windows", "d7/d81/a01365.html#lsd-on-windows", null ]
        ] ],
        [ "Highlighting", "d7/d81/a01365.html#highlighting", null ],
        [ "Tree-Sitter", "d7/d81/a01365.html#tree-sitter", [
          [ "Tree-Sitter On Linux", "d7/d81/a01365.html#tree-sitter-on-linux", null ],
          [ "Tree-Sitter On macOS", "d7/d81/a01365.html#tree-sitter-on-macos", null ],
          [ "Tree-Sitter On Windows", "d7/d81/a01365.html#tree-sitter-on-windows", null ]
        ] ],
        [ "Tree-Sitter-CLI", "d7/d81/a01365.html#tree-sitter-cli", [
          [ "Tree-Sitter-CLI On Linux", "d7/d81/a01365.html#tree-sitter-cli-on-linux", null ],
          [ "Tree-Sitter-CLI On macOS", "d7/d81/a01365.html#tree-sitter-cli-on-macos", null ],
          [ "Tree-Sitter-CLI On Windows", "d7/d81/a01365.html#tree-sitter-cli-on-windows", null ]
        ] ],
        [ "Tree-Sitter Parsers", "d7/d81/a01365.html#tree-sitter-parsers", [
          [ "Tree-Sitter Parsers On Linux", "d7/d81/a01365.html#tree-sitter-parsers-on-linux", null ],
          [ "Tree-Sitter Parsers On macOS", "d7/d81/a01365.html#tree-sitter-parsers-on-macos", null ],
          [ "Tree-Sitter Parsers On Windows", "d7/d81/a01365.html#tree-sitter-parsers-on-windows", null ],
          [ "Testing Tree-Sitter", "d7/d81/a01365.html#testing-tree-sitter", null ]
        ] ],
        [ "Rustlings", "d7/d81/a01365.html#rustlings", null ],
        [ "Neovim", "d7/d81/a01365.html#neovim", null ],
        [ "Neovim Configuration", "d7/d81/a01365.html#neovim-configuration", [
          [ "Custom Highlights", "d7/d81/a01365.html#custom-highlights", null ],
          [ "Norcalli Colorizer", "d7/d81/a01365.html#norcalli-colorizer", [
            [ "AI Overview of Developer Norcalli", "d7/d81/a01365.html#ai-overview-of-developer-norcalli", null ]
          ] ],
          [ "To Install Norcalli's nvim-colorizer.lua", "d7/d81/a01365.html#to-install-norcallis-nvim-colorizerlua", null ]
        ] ],
        [ "Folke's Snacks.nvim", "d7/d81/a01365.html#folkes-snacksnvim", null ],
        [ "Neovim Linkage to the C-Menu API", "d7/d81/a01365.html#neovim-linkage-to-the-c-menu-api", null ],
        [ "Ghostty", "d7/d81/a01365.html#ghostty", [
          [ "Ghostty On Linux", "d7/d81/a01365.html#ghostty-on-linux", null ],
          [ "Ghostty On macOS", "d7/d81/a01365.html#ghostty-on-macos", null ],
          [ "Ghostty On Windows", "d7/d81/a01365.html#ghostty-on-windows", null ]
        ] ],
        [ "Useful Configurations", "d7/d81/a01365.html#useful-configurations", [
          [ "Alternate Bash Executable", "d7/d81/a01365.html#alternate-bash-executable", null ],
          [ "Shell Configuration", "d7/d81/a01365.html#shell-configuration", null ],
          [ "Customize Your Terminal Emulator", "d7/d81/a01365.html#customize-your-terminal-emulator", [
            [ "Fonts", "d7/d81/a01365.html#fonts", null ],
            [ "Example Terminal Configurations", "d7/d81/a01365.html#example-terminal-configurations", [
              [ "Ghostty Configuration", "d7/d81/a01365.html#ghostty-configuration-1", null ],
              [ "Kitty Configuration", "d7/d81/a01365.html#kitty-configuration", null ],
              [ "Alacritty Configuration", "d7/d81/a01365.html#alacritty-configuration", null ]
            ] ]
          ] ]
        ] ],
        [ "Additional Resources", "d7/d81/a01365.html#additional-resources", [
          [ "Let's Get Rusty", "d7/d81/a01365.html#lets-get-rusty", null ],
          [ "Folke", "d7/d81/a01365.html#folke", null ],
          [ "Other Resources", "d7/d81/a01365.html#other-resources", null ]
        ] ],
        [ "Conclusion", "d7/d81/a01365.html#conclusion", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d7/d81/a01365.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
      ] ]
    ] ],
    [ "FAQ", "d6/dfe/a01366.html", [
      [ "Table of Contents", "d6/dfe/a01366.html#table-of-contents-3", [
        [ "lf is fast, but I rely on find's features", "d6/dfe/a01366.html#lf-is-fast-but-i-rely-on-finds-features", null ],
        [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc", "d6/dfe/a01366.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
        [ "Can lf match files with multiple suffixes", "d6/dfe/a01366.html#can-lf-match-files-with-multiple-suffixes", null ],
        [ "Multiple Executables", "d6/dfe/a01366.html#multiple-executables", null ],
        [ "Static Executables", "d6/dfe/a01366.html#static-executables", null ],
        [ "What's the Icon?", "d6/dfe/a01366.html#whats-the-icon", null ],
        [ "C-Menu's File Structure", "d6/dfe/a01366.html#c-menus-file-structure", null ],
        [ "Some Menu Selections Don't work", "d6/dfe/a01366.html#some-menu-selections-dont-work", [
          [ "Visual Aids Soap-box", "d6/dfe/a01366.html#visual-aids-soap-box", null ]
        ] ],
        [ "High Precision Math With C-Menu and Gawk", "d6/dfe/a01366.html#high-precision-math-with-c-menu-and-gawk", null ],
        [ "TrueColor Support", "d6/dfe/a01366.html#truecolor-support", null ],
        [ "Why View Displays Question Marks", "d6/dfe/a01366.html#why-view-displays-question-marks", null ],
        [ "View - How to Colorize Manual Pages", "d6/dfe/a01366.html#view---how-to-colorize-manual-pages", null ],
        [ "View - How to Colorize HTML Color Codes", "d6/dfe/a01366.html#view---how-to-colorize-html-color-codes", null ],
        [ "View - How to Customize Colors", "d6/dfe/a01366.html#view---how-to-customize-colors", null ],
        [ "Menu, Form, Pick, and View API", "d6/dfe/a01366.html#menu-form-pick-and-view-api", null ],
        [ "View - How to Use Tree-Sitter with View", "d6/dfe/a01366.html#view---how-to-use-tree-sitter-with-view", null ],
        [ "Install Tree-Sitter-CLI", "d6/dfe/a01366.html#install-tree-sitter-cli", [
          [ "Download From Github", "d6/dfe/a01366.html#download-from-github", null ]
        ] ],
        [ "Menu Form - Integrating External Executables", "d6/dfe/a01366.html#menu-form---integrating-external-executables", null ],
        [ "Menu - Using the Installment Loan Calculator", "d6/dfe/a01366.html#menu---using-the-installment-loan-calculator", null ],
        [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "d6/dfe/a01366.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
        [ "Menu Form - Field Delimiters", "d6/dfe/a01366.html#menu-form---field-delimiters", null ],
        [ "Menu Form - Data Types", "d6/dfe/a01366.html#menu-form---data-types", null ],
        [ "Menu - Interprocess Communications", "d6/dfe/a01366.html#menu---interprocess-communications", null ],
        [ "Menu - What Happened to Delete by Inode", "d6/dfe/a01366.html#menu---what-happened-to-delete-by-inode", null ],
        [ "Pick - Selecting Multiple Files", "d6/dfe/a01366.html#pick---selecting-multiple-files", null ],
        [ "Menu lf - Where Are My Header Files?", "d6/dfe/a01366.html#menu-lf---where-are-my-header-files", null ],
        [ "View In a Box Window", "d6/dfe/a01366.html#view-in-a-box-window", null ]
      ] ]
    ] ],
    [ "DATE/TIME CONUNDRUM", "dd/d86/a01367.html", [
      [ "Overview", "dd/d86/a01367.html#overview", null ],
      [ "Correct workaround", "dd/d86/a01367.html#correct-workaround", null ],
      [ "Why the previous results looked contradictory", "dd/d86/a01367.html#why-the-previous-results-looked-contradictory", null ],
      [ "Important note about <span class=\"tt\">gmtime_r()</span>", "dd/d86/a01367.html#important-note-about-gmtime_r", null ],
      [ "Recommended helper", "dd/d86/a01367.html#recommended-helper", null ],
      [ "Revised interpretation of the original test cases", "dd/d86/a01367.html#revised-interpretation-of-the-original-test-cases", null ],
      [ "Original demonstration code", "dd/d86/a01367.html#original-demonstration-code", null ]
    ] ],
    [ "C-Menu - A User Interface Toolkit", "dd/d0c/a01368.html", [
      [ "Table of Contents", "dd/d0c/a01368.html#table-of-contents-4", null ],
      [ "Introduction", "dd/d0c/a01368.html#introduction-4", null ],
      [ "C-Menu Previews", "dd/d0c/a01368.html#c-menu-previews", [
        [ "Menu", "dd/d0c/a01368.html#menu", null ],
        [ "Form", "dd/d0c/a01368.html#form", null ],
        [ "Pick - Object Selection", "dd/d0c/a01368.html#pick---object-selection", null ],
        [ "View - A pager for viewing files", "dd/d0c/a01368.html#view---a-pager-for-viewing-files", null ],
        [ "RSH - A Root Shell Alternative", "dd/d0c/a01368.html#rsh---a-root-shell-alternative-1", null ],
        [ "lf - A Regular Expression File Finder", "dd/d0c/a01368.html#lf---a-regular-expression-file-finder-1", null ]
      ] ],
      [ "API", "dd/d0c/a01368.html#api", [
        [ "Completions in Neovim", "dd/d0c/a01368.html#completions-in-neovim", null ],
        [ "Performance and Footprint", "dd/d0c/a01368.html#performance-and-footprint", null ]
      ] ],
      [ "C-Menu INSTALLATION", "dd/d0c/a01368.html#c-menu-installation", [
        [ "C-Menu Binaries for Linux x86_64", "dd/d0c/a01368.html#c-menu-binaries-for-linux-x86_64", null ],
        [ "Build C-Menu from Source", "dd/d0c/a01368.html#build-c-menu-from-source", [
          [ "RSH Static Linking", "dd/d0c/a01368.html#rsh-static-linking", null ],
          [ "Prerequisites", "dd/d0c/a01368.html#prerequisites-1", null ],
          [ "Option 1 - Build C-Menu Using CMake Directly", "dd/d0c/a01368.html#option-1---build-c-menu-using-cmake-directly", null ],
          [ "Option 2 - Build C-Menu with Provided Scripts", "dd/d0c/a01368.html#option-2---build-c-menu-with-provided-scripts", null ],
          [ "Option 3 - Build C-Menu Using Makefile", "dd/d0c/a01368.html#option-3---build-c-menu-using-makefile", null ]
        ] ],
        [ "Finish the installation", "dd/d0c/a01368.html#finish-the-installation", null ]
      ] ]
    ] ],
    [ "OVERVIEW", "d1/d17/a01369.html", [
      [ "Table of Contents", "d1/d17/a01369.html#table-of-contents-5", [
        [ "Other C-Menu Documents", "d1/d17/a01369.html#other-c-menu-documents", null ],
        [ "Get C-Menu on Github", "d1/d17/a01369.html#get-c-menu-on-github-3", [
          [ "C-Menu Introduction", "d1/d17/a01369.html#c-menu-introduction", null ]
        ] ],
        [ "<b><em>NEW Features</em></b>", "d1/d17/a01369.html#_new-features_", [
          [ "<b><em>NEW View Line Numbering</em></b>", "d1/d17/a01369.html#_new-view-line-numbering_", null ],
          [ "Large Log File in View", "d1/d17/a01369.html#large-log-file-in-view", null ],
          [ "<b><em>New API Integration With Neovim</em></b>", "d1/d17/a01369.html#_new-api-integration-with-neovim_", null ],
          [ "<b><em>New Options for lf</em></b>", "d1/d17/a01369.html#_new-options-for-lf_", null ]
        ] ],
        [ "C-Menu Exercises", "d1/d17/a01369.html#c-menu-exercises", null ],
        [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "d1/d17/a01369.html#menu-form-pick-view-c-keys-rsh-and-lf", [
          [ "C-Menu API", "d1/d17/a01369.html#c-menu-api", null ],
          [ "Elements of C-Menu", "d1/d17/a01369.html#elements-of-c-menu", null ],
          [ "Key Features", "d1/d17/a01369.html#key-features", null ],
          [ "Highlights (Pun Intended)", "d1/d17/a01369.html#highlights-pun-intended", null ],
          [ "Just Do It", "d1/d17/a01369.html#just-do-it", null ],
          [ "Menu", "d1/d17/a01369.html#menu-1", null ],
          [ "C-Keys - Diagnose Keyboard/Mouse Input", "d1/d17/a01369.html#c-keys---diagnose-keyboardmouse-input", null ],
          [ "Pick - A Picker", "d1/d17/a01369.html#pick---a-picker", null ],
          [ "Form for Data Entry and Editing", "d1/d17/a01369.html#form-for-data-entry-and-editing", null ],
          [ "Form Key Features", "d1/d17/a01369.html#form-key-features", null ],
          [ "Form Data Types", "d1/d17/a01369.html#form-data-types-2", null ],
          [ "Sample Menu Description File", "d1/d17/a01369.html#sample-menu-description-file", null ],
          [ "View", "d1/d17/a01369.html#view", [
            [ "Log File With Editor", "d1/d17/a01369.html#log-file-with-editor", null ],
            [ "Screenshot of the Same File With View", "d1/d17/a01369.html#screenshot-of-the-same-file-with-view", null ]
          ] ],
          [ "View and Color Manual Pages", "d1/d17/a01369.html#view-and-color-manual-pages", null ],
          [ "Example Manual Page Using Editor", "d1/d17/a01369.html#example-manual-page-using-editor", null ],
          [ "Example Manual Page", "d1/d17/a01369.html#example-manual-page", null ],
          [ "Demand Paged Virtual Address Space", "d1/d17/a01369.html#demand-paged-virtual-address-space", null ],
          [ "View - Other Features", "d1/d17/a01369.html#view---other-features", null ],
          [ "3-Channel Gamma Correction", "d1/d17/a01369.html#autotoc_md3-channel-gamma-correction", null ],
          [ "Gray Gamma", "d1/d17/a01369.html#gray-gamma", null ],
          [ "RSH", "d1/d17/a01369.html#rsh", null ],
          [ "Maintaining Security with RSH", "d1/d17/a01369.html#maintaining-security-with-rsh", null ],
          [ "lf - List Files Using Regular Expressions", "d1/d17/a01369.html#lf---list-files-using-regular-expressions", null ]
        ] ],
        [ "Features", "d1/d17/a01369.html#features", null ],
        [ "Configuration", "d1/d17/a01369.html#configuration", null ],
        [ "MIT License", "d1/d17/a01369.html#mit-license", null ]
      ] ]
    ] ],
    [ "Performance", "d8/dbe/a01370.html", [
      [ "Design Philosophy and Optimizations", "d8/dbe/a01370.html#design-philosophy-and-optimizations", [
        [ "C-Menu Launcher", "d8/dbe/a01370.html#c-menu-launcher", null ]
      ] ]
    ] ],
    [ "C-Menu ROADMAP", "d6/d4d/a01371.html", [
      [ "0.2.9 Tasks to Complete before 0.3.0", "d6/d4d/a01371.html#autotoc_md029-tasks-to-complete-before-030", null ],
      [ "0.3.0 On the Horizon", "d6/d4d/a01371.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "d6/d4d/a01371.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "d6/d4d/a01371.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "d6/d4d/a01371.html#autotoc_md029---pre-release", [
        [ "Form", "d6/d4d/a01371.html#form-1", null ],
        [ "Pick", "d6/d4d/a01371.html#pick", null ],
        [ "Exercises - Example Use Cases", "d6/d4d/a01371.html#exercises---example-use-cases", null ],
        [ "View", "d6/d4d/a01371.html#view-1", null ]
      ] ],
      [ "1.0.0 - Initial Release", "d6/d4d/a01371.html#autotoc_md100---initial-release", [
        [ "General", "d6/d4d/a01371.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "d6/d4d/a01371.html#autotoc_md110---feature-enhancements", [
        [ "General", "d6/d4d/a01371.html#general-1", null ]
      ] ]
    ] ],
    [ "snippets", "df/d0b/a01372.html", [
      [ "Table of Contents", "df/d0b/a01372.html#table-of-contents-6", [
        [ "C-Menu Desktop Files", "df/d0b/a01372.html#c-menu-desktop-files", null ],
        [ "C-Menu bashrc Configuration", "df/d0b/a01372.html#c-menu-bashrc-configuration", [
          [ "Shell Logging", "df/d0b/a01372.html#shell-logging", null ],
          [ "Prepend Path", "df/d0b/a01372.html#prepend-path", null ],
          [ "Helpful C-Menu Environment Variables", "df/d0b/a01372.html#helpful-c-menu-environment-variables", null ],
          [ "Security Through Obscurity", "df/d0b/a01372.html#security-through-obscurity", null ],
          [ "RSH Helpers", "df/d0b/a01372.html#rsh-helpers", null ],
          [ "Privilege Indicator Shell Prompts", "df/d0b/a01372.html#privilege-indicator-shell-prompts", null ],
          [ "Terminal and Editor Settings", "df/d0b/a01372.html#terminal-and-editor-settings", null ],
          [ "GDB Debugging Setup", "df/d0b/a01372.html#gdb-debugging-setup", null ],
          [ "If You Can't Stop Typing \"vi\"", "df/d0b/a01372.html#if-you-cant-stop-typing-vi", null ],
          [ "C-Menu Startup with \"mm\"", "df/d0b/a01372.html#c-menu-startup-with-mm", null ],
          [ "Curses Escape Delay", "df/d0b/a01372.html#curses-escape-delay", null ],
          [ "Use lsd or eza instead of ls", "df/d0b/a01372.html#use-lsd-or-eza-instead-of-ls", null ],
          [ "Locale Settings", "df/d0b/a01372.html#locale-settings", null ],
          [ "System Specific Environment Variables", "df/d0b/a01372.html#system-specific-environment-variables", null ]
        ] ],
        [ "C-Menu Configuration", "df/d0b/a01372.html#c-menu-configuration-1", null ],
        [ "Terminal Configurations", "df/d0b/a01372.html#terminal-configurations", [
          [ "Ghostty", "df/d0b/a01372.html#ghostty-1", null ],
          [ "Kitty", "df/d0b/a01372.html#kitty", null ],
          [ "Alacritty", "df/d0b/a01372.html#alacritty", null ]
        ] ],
        [ "Tree-Sitter", "df/d0b/a01372.html#tree-sitter-1", [
          [ "Tree-Sitter config.json", "df/d0b/a01372.html#tree-sitter-configjson", null ]
        ] ]
      ] ]
    ] ],
    [ "Running Valgrind Against C-Menu", "d7/d38/a01373.html", [
      [ "Background", "d7/d38/a01373.html#background", null ],
      [ "Suppression File", "d7/d38/a01373.html#suppression-file", null ],
      [ "How to Run", "d7/d38/a01373.html#how-to-run", [
        [ "Using the Makefile target (recommended)", "d7/d38/a01373.html#using-the-makefile-target-recommended", null ],
        [ "Running manually", "d7/d38/a01373.html#running-manually", null ]
      ] ],
      [ "Expected Output", "d7/d38/a01373.html#expected-output", null ],
      [ "Reference", "d7/d38/a01373.html#reference", null ]
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
"d2/dd2/a01164.html",
"d7/d81/a01365.html#installing-rust-on-linux-and-macos",
"d8/d11/a01178.html#gac81796e830049e74987a6b526cfc296f",
"d8/db9/a00725.html#ae646ecf8918437a8a1f2ea4304db008a",
"db/d17/a01148.html#af4d15f657ba5f01f2497b2fef7d59fde",
"dd/d86/a01367.html#why-the-previous-results-looked-contradictory",
"functions_w.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';