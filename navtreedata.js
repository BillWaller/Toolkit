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
    [ "API", "d2/dff/a01374.html", [
      [ "How to get C-Menu", "d2/dff/a01374.html#how-to-get-c-menu", [
        [ "Get C-Menu on Github", "d2/dff/a01374.html#get-c-menu-on-github", null ],
        [ "Introduction", "d2/dff/a01374.html#introduction", null ],
        [ "API Organization", "d2/dff/a01374.html#api-organization", [
          [ "C-Menu Header Files", "d2/dff/a01374.html#c-menu-header-files", [
            [ "include/cm.h", "d2/dff/a01374.html#includecmh", null ],
            [ "include/common.h", "d2/dff/a01374.html#includecommonh", null ],
            [ "include/menu.h, form.h, pick.h, and view.h", "d2/dff/a01374.html#includemenuh-formh-pickh-and-viewh", null ],
            [ "include/version.h and version.h", "d2/dff/a01374.html#includeversionh-and-versionh", null ],
            [ "Version Compatibility", "d2/dff/a01374.html#version-compatibility", null ],
            [ "Roadmap for API Documentation and User Guide", "d2/dff/a01374.html#roadmap-for-api-documentation-and-user-guide", null ],
            [ "Documentation", "d2/dff/a01374.html#documentation", null ]
          ] ]
        ] ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d2/dff/a01374.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
      ] ]
    ] ],
    [ "C-Menu-Addendum", "d5/df5/a01375.html", [
      [ "How to get C-Menu", "d5/df5/a01375.html#how-to-get-c-menu-1", [
        [ "Get C-Menu on Github", "d5/df5/a01375.html#get-c-menu-on-github-1", null ],
        [ "Table of Contents", "d5/df5/a01375.html#table-of-contents", null ],
        [ "Introduction", "d5/df5/a01375.html#introduction-1", null ],
        [ "Prerequisites", "d5/df5/a01375.html#prerequisites", [
          [ "Not Required, But Recommended", "d5/df5/a01375.html#not-required-but-recommended", null ]
        ] ],
        [ "Getting Started", "d5/df5/a01375.html#getting-started", [
          [ "C-Menu Environment Variables", "d5/df5/a01375.html#c-menu-environment-variables", null ],
          [ "C-Menu File Layout", "d5/df5/a01375.html#c-menu-file-layout", null ],
          [ "RSH Safety Features", "d5/df5/a01375.html#rsh-safety-features", null ],
          [ "Using RSH", "d5/df5/a01375.html#using-rsh", null ],
          [ "RSH - A Use Case", "d5/df5/a01375.html#rsh---a-use-case", null ]
        ] ],
        [ "Starting C-Menu", "d5/df5/a01375.html#starting-c-menu", null ],
        [ "C-Menu configuration", "d5/df5/a01375.html#c-menu-configuration", null ],
        [ "How C-Menu Menu Works", "d5/df5/a01375.html#how-c-menu-menu-works", [
          [ "C-Menu Example Applications Menu", "d5/df5/a01375.html#c-menu-example-applications-menu", null ],
          [ "Menu Description File Format", "d5/df5/a01375.html#menu-description-file-format", null ],
          [ "Form field editor", "d5/df5/a01375.html#form-field-editor", [
            [ "Form Line Type Specifiers", "d5/df5/a01375.html#form-line-type-specifiers", null ],
            [ "Form Field Delimiters", "d5/df5/a01375.html#form-field-delimiters", null ],
            [ "Form Data Types", "d5/df5/a01375.html#form-data-types", null ],
            [ "Form Line Syntax", "d5/df5/a01375.html#form-line-syntax", null ],
            [ "Form Options", "d5/df5/a01375.html#form-options", null ]
          ] ]
        ] ],
        [ "C-Menu Pick", "d5/df5/a01375.html#c-menu-pick", [
          [ "Pick Usage", "d5/df5/a01375.html#pick-usage", [
            [ "Selecting Items", "d5/df5/a01375.html#selecting-items", null ]
          ] ],
          [ "Pick Options", "d5/df5/a01375.html#pick-options", null ]
        ] ],
        [ "C-Menu View", "d5/df5/a01375.html#c-menu-view", [
          [ "View Options", "d5/df5/a01375.html#view-options", [
            [ "View Navigation", "d5/df5/a01375.html#view-navigation", null ],
            [ "Searching Forward", "d5/df5/a01375.html#searching-forward", null ],
            [ "Searching Backward", "d5/df5/a01375.html#searching-backward", null ],
            [ "Horizontal Scrolling", "d5/df5/a01375.html#horizontal-scrolling", null ],
            [ "Motion Keys", "d5/df5/a01375.html#motion-keys", null ]
          ] ],
          [ "C-Menu Options", "d5/df5/a01375.html#c-menu-options", null ],
          [ "C-Menu configuration file example", "d5/df5/a01375.html#c-menu-configuration-file-example", null ],
          [ "lf", "d5/df5/a01375.html#lf", null ],
          [ "whence", "d5/df5/a01375.html#whence", null ]
        ] ],
        [ "Troubleshooting", "d5/df5/a01375.html#troubleshooting", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository", "d5/df5/a01375.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
      ] ]
    ] ],
    [ "C-Menu-UG", "d2/d29/a01376.html", null ],
    [ "Changelog", "d3/dea/a01377.html", [
      [ "[Released] - 2026-02-04", "d3/dea/a01377.html#released---2026-02-04", [
        [ "Fixed", "d3/dea/a01377.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "d3/dea/a01377.html#autotoc_md028--2026-02-04", [
        [ "Added", "d3/dea/a01377.html#added", null ]
      ] ]
    ] ],
    [ "exercises", "db/d74/a01378.html", [
      [ "Table of Contents", "db/d74/a01378.html#table-of-contents-1", [
        [ "Introduction", "db/d74/a01378.html#introduction-2", null ],
        [ "Exercise 1: System Configurations", "db/d74/a01378.html#exercise-1-system-configurations", [
          [ "SDDM Background Configuration", "db/d74/a01378.html#sddm-background-configuration", [
            [ "Requisites", "db/d74/a01378.html#requisites", null ]
          ] ],
          [ "Ghostty Configuration", "db/d74/a01378.html#ghostty-configuration", null ],
          [ "Alacritty and Kitty", "db/d74/a01378.html#alacritty-and-kitty", null ],
          [ "Rustlings Exercises", "db/d74/a01378.html#rustlings-exercises", null ]
        ] ]
      ] ]
    ] ],
    [ "extras", "d0/d9b/a01379.html", [
      [ "How to get C-Menu", "d0/d9b/a01379.html#how-to-get-c-menu-2", [
        [ "Get C-Menu on Github", "d0/d9b/a01379.html#get-c-menu-on-github-2", null ],
        [ "Table of Contents", "d0/d9b/a01379.html#table-of-contents-2", null ],
        [ "Introduction", "d0/d9b/a01379.html#introduction-3", null ],
        [ "Installing Rust", "d0/d9b/a01379.html#installing-rust", [
          [ "Installing Rust On Linux and macOS", "d0/d9b/a01379.html#installing-rust-on-linux-and-macos", null ]
        ] ],
        [ "About C-Menu and R-Menu", "d0/d9b/a01379.html#about-c-menu-and-r-menu", null ],
        [ "Installing Bat", "d0/d9b/a01379.html#installing-bat", [
          [ "Bat On Linux", "d0/d9b/a01379.html#bat-on-linux", null ],
          [ "Bat On macOS", "d0/d9b/a01379.html#bat-on-macos", null ],
          [ "Bat On Windows", "d0/d9b/a01379.html#bat-on-windows", null ]
        ] ],
        [ "Installing Ripgrep", "d0/d9b/a01379.html#installing-ripgrep", [
          [ "Ripgrep On Linux", "d0/d9b/a01379.html#ripgrep-on-linux", null ],
          [ "Ripgrep On macOS", "d0/d9b/a01379.html#ripgrep-on-macos", null ],
          [ "Ripgrep On Windows", "d0/d9b/a01379.html#ripgrep-on-windows", null ]
        ] ],
        [ "lsd", "d0/d9b/a01379.html#lsd", [
          [ "lsd On Linux", "d0/d9b/a01379.html#lsd-on-linux", null ],
          [ "lsd On macOS", "d0/d9b/a01379.html#lsd-on-macos", null ],
          [ "lsd On Windows", "d0/d9b/a01379.html#lsd-on-windows", null ]
        ] ],
        [ "Highlighting", "d0/d9b/a01379.html#highlighting", null ],
        [ "Tree-Sitter", "d0/d9b/a01379.html#tree-sitter", [
          [ "Tree-Sitter On Linux", "d0/d9b/a01379.html#tree-sitter-on-linux", null ],
          [ "Tree-Sitter On macOS", "d0/d9b/a01379.html#tree-sitter-on-macos", null ],
          [ "Tree-Sitter On Windows", "d0/d9b/a01379.html#tree-sitter-on-windows", null ]
        ] ],
        [ "Tree-Sitter-CLI", "d0/d9b/a01379.html#tree-sitter-cli", [
          [ "Tree-Sitter-CLI On Linux", "d0/d9b/a01379.html#tree-sitter-cli-on-linux", null ],
          [ "Tree-Sitter-CLI On macOS", "d0/d9b/a01379.html#tree-sitter-cli-on-macos", null ],
          [ "Tree-Sitter-CLI On Windows", "d0/d9b/a01379.html#tree-sitter-cli-on-windows", null ]
        ] ],
        [ "Tree-Sitter Parsers", "d0/d9b/a01379.html#tree-sitter-parsers", [
          [ "Tree-Sitter Parsers On Linux", "d0/d9b/a01379.html#tree-sitter-parsers-on-linux", null ],
          [ "Tree-Sitter Parsers On macOS", "d0/d9b/a01379.html#tree-sitter-parsers-on-macos", null ],
          [ "Tree-Sitter Parsers On Windows", "d0/d9b/a01379.html#tree-sitter-parsers-on-windows", null ],
          [ "Testing Tree-Sitter", "d0/d9b/a01379.html#testing-tree-sitter", null ]
        ] ],
        [ "Rustlings", "d0/d9b/a01379.html#rustlings", null ],
        [ "Neovim", "d0/d9b/a01379.html#neovim", null ],
        [ "Neovim Configuration", "d0/d9b/a01379.html#neovim-configuration", [
          [ "Custom Highlights", "d0/d9b/a01379.html#custom-highlights", null ],
          [ "Norcalli Colorizer", "d0/d9b/a01379.html#norcalli-colorizer", [
            [ "AI Overview of Developer Norcalli", "d0/d9b/a01379.html#ai-overview-of-developer-norcalli", null ]
          ] ],
          [ "To Install Norcalli's nvim-colorizer.lua", "d0/d9b/a01379.html#to-install-norcallis-nvim-colorizerlua", null ]
        ] ],
        [ "Folke's Snacks.nvim", "d0/d9b/a01379.html#folkes-snacksnvim", null ],
        [ "Neovim Linkage to the C-Menu API", "d0/d9b/a01379.html#neovim-linkage-to-the-c-menu-api", null ],
        [ "Ghostty", "d0/d9b/a01379.html#ghostty", [
          [ "Ghostty On Linux", "d0/d9b/a01379.html#ghostty-on-linux", null ],
          [ "Ghostty On macOS", "d0/d9b/a01379.html#ghostty-on-macos", null ],
          [ "Ghostty On Windows", "d0/d9b/a01379.html#ghostty-on-windows", null ]
        ] ],
        [ "Useful Configurations", "d0/d9b/a01379.html#useful-configurations", [
          [ "Alternate Bash Executable", "d0/d9b/a01379.html#alternate-bash-executable", null ],
          [ "Shell Configuration", "d0/d9b/a01379.html#shell-configuration", null ],
          [ "Customize Your Terminal Emulator", "d0/d9b/a01379.html#customize-your-terminal-emulator", [
            [ "Fonts", "d0/d9b/a01379.html#fonts", null ],
            [ "Example Terminal Configurations", "d0/d9b/a01379.html#example-terminal-configurations", [
              [ "Ghostty Configuration", "d0/d9b/a01379.html#ghostty-configuration-1", null ],
              [ "Kitty Configuration", "d0/d9b/a01379.html#kitty-configuration", null ],
              [ "Alacritty Configuration", "d0/d9b/a01379.html#alacritty-configuration", null ]
            ] ]
          ] ]
        ] ],
        [ "Additional Resources", "d0/d9b/a01379.html#additional-resources", [
          [ "Let's Get Rusty", "d0/d9b/a01379.html#lets-get-rusty", null ],
          [ "Folke", "d0/d9b/a01379.html#folke", null ],
          [ "Other Resources", "d0/d9b/a01379.html#other-resources", null ]
        ] ],
        [ "Conclusion", "d0/d9b/a01379.html#conclusion", null ],
        [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d0/d9b/a01379.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
      ] ]
    ] ],
    [ "FAQ", "dd/d6d/a01380.html", [
      [ "Table of Contents", "dd/d6d/a01380.html#table-of-contents-3", [
        [ "lf is fast, but I rely on find's features", "dd/d6d/a01380.html#lf-is-fast-but-i-rely-on-finds-features", null ],
        [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc", "dd/d6d/a01380.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
        [ "Can lf match files with multiple suffixes", "dd/d6d/a01380.html#can-lf-match-files-with-multiple-suffixes", null ],
        [ "Multiple Executables", "dd/d6d/a01380.html#multiple-executables", null ],
        [ "Static Executables", "dd/d6d/a01380.html#static-executables", null ],
        [ "What's the Icon?", "dd/d6d/a01380.html#whats-the-icon", null ],
        [ "C-Menu's File Structure", "dd/d6d/a01380.html#c-menus-file-structure", null ],
        [ "Some Menu Selections Don't work", "dd/d6d/a01380.html#some-menu-selections-dont-work", [
          [ "Visual Aids Soap-box", "dd/d6d/a01380.html#visual-aids-soap-box", null ]
        ] ],
        [ "High Precision Math With C-Menu and Gawk", "dd/d6d/a01380.html#high-precision-math-with-c-menu-and-gawk", null ],
        [ "TrueColor Support", "dd/d6d/a01380.html#truecolor-support", null ],
        [ "Why View Displays Question Marks", "dd/d6d/a01380.html#why-view-displays-question-marks", null ],
        [ "View - How to Colorize Manual Pages", "dd/d6d/a01380.html#view---how-to-colorize-manual-pages", null ],
        [ "View - How to Colorize HTML Color Codes", "dd/d6d/a01380.html#view---how-to-colorize-html-color-codes", null ],
        [ "View - How to Customize Colors", "dd/d6d/a01380.html#view---how-to-customize-colors", null ],
        [ "Menu, Form, Pick, and View API", "dd/d6d/a01380.html#menu-form-pick-and-view-api", null ],
        [ "View - How to Use Tree-Sitter with View", "dd/d6d/a01380.html#view---how-to-use-tree-sitter-with-view", null ],
        [ "Install Tree-Sitter-CLI", "dd/d6d/a01380.html#install-tree-sitter-cli", [
          [ "Download From Github", "dd/d6d/a01380.html#download-from-github", null ]
        ] ],
        [ "Menu Form - Integrating External Executables", "dd/d6d/a01380.html#menu-form---integrating-external-executables", null ],
        [ "Menu - Using the Installment Loan Calculator", "dd/d6d/a01380.html#menu---using-the-installment-loan-calculator", null ],
        [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "dd/d6d/a01380.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
        [ "Menu Form - Field Delimiters", "dd/d6d/a01380.html#menu-form---field-delimiters", null ],
        [ "Menu Form - Data Types", "dd/d6d/a01380.html#menu-form---data-types", null ],
        [ "Menu - Interprocess Communications", "dd/d6d/a01380.html#menu---interprocess-communications", null ],
        [ "Menu - What Happened to Delete by Inode", "dd/d6d/a01380.html#menu---what-happened-to-delete-by-inode", null ],
        [ "Pick - Selecting Multiple Files", "dd/d6d/a01380.html#pick---selecting-multiple-files", null ],
        [ "Menu lf - Where Are My Header Files?", "dd/d6d/a01380.html#menu-lf---where-are-my-header-files", null ],
        [ "View In a Box Window", "dd/d6d/a01380.html#view-in-a-box-window", null ]
      ] ]
    ] ],
    [ "DATE/TIME CONUNDRUM", "da/d77/a01381.html", [
      [ "Overview", "da/d77/a01381.html#overview", null ],
      [ "Correct workaround", "da/d77/a01381.html#correct-workaround", null ],
      [ "Why the previous results looked contradictory", "da/d77/a01381.html#why-the-previous-results-looked-contradictory", null ],
      [ "Important note about <span class=\"tt\">gmtime_r()</span>", "da/d77/a01381.html#important-note-about-gmtime_r", null ],
      [ "Recommended helper", "da/d77/a01381.html#recommended-helper", null ],
      [ "Revised interpretation of the original test cases", "da/d77/a01381.html#revised-interpretation-of-the-original-test-cases", null ],
      [ "Original demonstration code", "da/d77/a01381.html#original-demonstration-code", null ]
    ] ],
    [ "C-Menu - A User Interface Toolkit", "de/d9d/a01382.html", [
      [ "Table of Contents", "de/d9d/a01382.html#table-of-contents-4", null ],
      [ "Introduction", "de/d9d/a01382.html#introduction-4", null ],
      [ "C-Menu Previews", "de/d9d/a01382.html#c-menu-previews", [
        [ "Menu", "de/d9d/a01382.html#menu", null ],
        [ "Form", "de/d9d/a01382.html#form", null ],
        [ "Pick - Object Selection", "de/d9d/a01382.html#pick---object-selection", null ],
        [ "View - A pager for viewing files", "de/d9d/a01382.html#view---a-pager-for-viewing-files", null ],
        [ "RSH - A Root Shell Alternative", "de/d9d/a01382.html#rsh---a-root-shell-alternative-1", null ],
        [ "lf - A Regular Expression File Finder", "de/d9d/a01382.html#lf---a-regular-expression-file-finder-1", null ]
      ] ],
      [ "API", "de/d9d/a01382.html#api", [
        [ "Completions in Neovim", "de/d9d/a01382.html#completions-in-neovim", null ],
        [ "Performance and Footprint", "de/d9d/a01382.html#performance-and-footprint", null ]
      ] ],
      [ "C-Menu INSTALLATION", "de/d9d/a01382.html#c-menu-installation", [
        [ "C-Menu Binaries for Linux x86_64", "de/d9d/a01382.html#c-menu-binaries-for-linux-x86_64", null ],
        [ "Build C-Menu from Source", "de/d9d/a01382.html#build-c-menu-from-source", [
          [ "RSH Static Linking", "de/d9d/a01382.html#rsh-static-linking", null ],
          [ "Prerequisites", "de/d9d/a01382.html#prerequisites-1", null ],
          [ "Option 1 - Build C-Menu Using CMake Directly", "de/d9d/a01382.html#option-1---build-c-menu-using-cmake-directly", null ],
          [ "Option 2 - Build C-Menu with Provided Scripts", "de/d9d/a01382.html#option-2---build-c-menu-with-provided-scripts", null ],
          [ "Option 3 - Build C-Menu Using Makefile", "de/d9d/a01382.html#option-3---build-c-menu-using-makefile", null ]
        ] ],
        [ "Finish the installation", "de/d9d/a01382.html#finish-the-installation", null ]
      ] ]
    ] ],
    [ "OVERVIEW", "de/dfe/a01383.html", [
      [ "Table of Contents", "de/dfe/a01383.html#table-of-contents-5", [
        [ "Other C-Menu Documents", "de/dfe/a01383.html#other-c-menu-documents", null ],
        [ "Get C-Menu on Github", "de/dfe/a01383.html#get-c-menu-on-github-3", [
          [ "C-Menu Introduction", "de/dfe/a01383.html#c-menu-introduction", null ],
          [ "View Line Numbering", "de/dfe/a01383.html#view-line-numbering", null ],
          [ "Large Log File in View", "de/dfe/a01383.html#large-log-file-in-view", null ],
          [ "<b><em>New API Integration With Neovim</em></b>", "de/dfe/a01383.html#_new-api-integration-with-neovim_", null ],
          [ "<b><em>New Options for lf</em></b>", "de/dfe/a01383.html#_new-options-for-lf_", null ]
        ] ],
        [ "C-Menu Exercises", "de/dfe/a01383.html#c-menu-exercises", null ],
        [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "de/dfe/a01383.html#menu-form-pick-view-c-keys-rsh-and-lf", [
          [ "C-Menu API", "de/dfe/a01383.html#c-menu-api", null ],
          [ "Elements of C-Menu", "de/dfe/a01383.html#elements-of-c-menu", null ],
          [ "Key Features", "de/dfe/a01383.html#key-features", null ],
          [ "Highlights (Pun Intended)", "de/dfe/a01383.html#highlights-pun-intended", null ],
          [ "Just Do It", "de/dfe/a01383.html#just-do-it", null ],
          [ "Menu", "de/dfe/a01383.html#menu-1", null ],
          [ "C-Keys - Diagnose Keyboard/Mouse Input", "de/dfe/a01383.html#c-keys---diagnose-keyboardmouse-input", null ],
          [ "Pick - A Picker", "de/dfe/a01383.html#pick---a-picker", null ],
          [ "Form for Data Entry and Editing", "de/dfe/a01383.html#form-for-data-entry-and-editing", null ],
          [ "Form Key Features", "de/dfe/a01383.html#form-key-features", null ],
          [ "Form Data Types", "de/dfe/a01383.html#form-data-types-2", null ],
          [ "Sample Menu Description File", "de/dfe/a01383.html#sample-menu-description-file", null ],
          [ "View", "de/dfe/a01383.html#view", [
            [ "Log File With Editor", "de/dfe/a01383.html#log-file-with-editor", null ],
            [ "Screenshot of the Same File With View", "de/dfe/a01383.html#screenshot-of-the-same-file-with-view", null ]
          ] ],
          [ "View and Color Manual Pages", "de/dfe/a01383.html#view-and-color-manual-pages", null ],
          [ "Example Manual Page Using Editor", "de/dfe/a01383.html#example-manual-page-using-editor", null ],
          [ "Example Manual Page", "de/dfe/a01383.html#example-manual-page", null ],
          [ "Demand Paged Virtual Address Space", "de/dfe/a01383.html#demand-paged-virtual-address-space", null ],
          [ "View - Other Features", "de/dfe/a01383.html#view---other-features", null ],
          [ "3-Channel Gamma Correction", "de/dfe/a01383.html#autotoc_md3-channel-gamma-correction", null ],
          [ "Gray Gamma", "de/dfe/a01383.html#gray-gamma", null ],
          [ "RSH", "de/dfe/a01383.html#rsh", null ],
          [ "Maintaining Security with RSH", "de/dfe/a01383.html#maintaining-security-with-rsh", null ],
          [ "lf - List Files Using Regular Expressions", "de/dfe/a01383.html#lf---list-files-using-regular-expressions", null ]
        ] ],
        [ "Features", "de/dfe/a01383.html#features", null ],
        [ "Configuration", "de/dfe/a01383.html#configuration", null ],
        [ "MIT License", "de/dfe/a01383.html#mit-license", null ]
      ] ]
    ] ],
    [ "Performance", "d7/dde/a01384.html", [
      [ "Design Philosophy and Optimizations", "d7/dde/a01384.html#design-philosophy-and-optimizations", [
        [ "C-Menu Launcher", "d7/dde/a01384.html#c-menu-launcher", null ]
      ] ]
    ] ],
    [ "C-Menu ROADMAP", "df/d68/a01385.html", [
      [ "0.2.9 Tasks to Complete before 0.3.0", "df/d68/a01385.html#autotoc_md029-tasks-to-complete-before-030", null ],
      [ "0.3.0 On the Horizon", "df/d68/a01385.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "df/d68/a01385.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "df/d68/a01385.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "df/d68/a01385.html#autotoc_md029---pre-release", [
        [ "Form", "df/d68/a01385.html#form-1", null ],
        [ "Pick", "df/d68/a01385.html#pick", null ],
        [ "Exercises - Example Use Cases", "df/d68/a01385.html#exercises---example-use-cases", null ],
        [ "View", "df/d68/a01385.html#view-1", null ]
      ] ],
      [ "1.0.0 - Initial Release", "df/d68/a01385.html#autotoc_md100---initial-release", [
        [ "General", "df/d68/a01385.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "df/d68/a01385.html#autotoc_md110---feature-enhancements", [
        [ "General", "df/d68/a01385.html#general-1", null ]
      ] ]
    ] ],
    [ "snippets", "d3/deb/a01386.html", [
      [ "Table of Contents", "d3/deb/a01386.html#table-of-contents-6", [
        [ "C-Menu Desktop Files", "d3/deb/a01386.html#c-menu-desktop-files", null ],
        [ "C-Menu bashrc Configuration", "d3/deb/a01386.html#c-menu-bashrc-configuration", [
          [ "Shell Logging", "d3/deb/a01386.html#shell-logging", null ],
          [ "Prepend Path", "d3/deb/a01386.html#prepend-path", null ],
          [ "Helpful C-Menu Environment Variables", "d3/deb/a01386.html#helpful-c-menu-environment-variables", null ],
          [ "Security Through Obscurity", "d3/deb/a01386.html#security-through-obscurity", null ],
          [ "RSH Helpers", "d3/deb/a01386.html#rsh-helpers", null ],
          [ "Privilege Indicator Shell Prompts", "d3/deb/a01386.html#privilege-indicator-shell-prompts", null ],
          [ "Terminal and Editor Settings", "d3/deb/a01386.html#terminal-and-editor-settings", null ],
          [ "GDB Debugging Setup", "d3/deb/a01386.html#gdb-debugging-setup", null ],
          [ "If You Can't Stop Typing \"vi\"", "d3/deb/a01386.html#if-you-cant-stop-typing-vi", null ],
          [ "C-Menu Startup with \"mm\"", "d3/deb/a01386.html#c-menu-startup-with-mm", null ],
          [ "Curses Escape Delay", "d3/deb/a01386.html#curses-escape-delay", null ],
          [ "Use lsd or eza instead of ls", "d3/deb/a01386.html#use-lsd-or-eza-instead-of-ls", null ],
          [ "Locale Settings", "d3/deb/a01386.html#locale-settings", null ],
          [ "System Specific Environment Variables", "d3/deb/a01386.html#system-specific-environment-variables", null ]
        ] ],
        [ "C-Menu Configuration", "d3/deb/a01386.html#c-menu-configuration-1", null ],
        [ "Terminal Configurations", "d3/deb/a01386.html#terminal-configurations", [
          [ "Ghostty", "d3/deb/a01386.html#ghostty-1", null ],
          [ "Kitty", "d3/deb/a01386.html#kitty", null ],
          [ "Alacritty", "d3/deb/a01386.html#alacritty", null ]
        ] ],
        [ "Tree-Sitter", "d3/deb/a01386.html#tree-sitter-1", [
          [ "Tree-Sitter config.json", "d3/deb/a01386.html#tree-sitter-configjson", null ]
        ] ]
      ] ]
    ] ],
    [ "Running Valgrind Against C-Menu", "d9/d40/a01387.html", [
      [ "Background", "d9/d40/a01387.html#background", null ],
      [ "Suppression File", "d9/d40/a01387.html#suppression-file", null ],
      [ "How to Run", "d9/d40/a01387.html#how-to-run", [
        [ "Using the Makefile target (recommended)", "d9/d40/a01387.html#using-the-makefile-target-recommended", null ],
        [ "Running manually", "d9/d40/a01387.html#running-manually", null ]
      ] ],
      [ "Expected Output", "d9/d40/a01387.html#expected-output", null ],
      [ "Reference", "d9/d40/a01387.html#reference", null ]
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
"d3/d0b/a01253.html",
"d6/d16/a01269.html#a2e908a64131c7a68ae615532ece64479",
"d7/daf/a01169.html#afe4863a6b75c5a20c2008f36f86cfeed",
"d8/db9/a00725.html#aedff85204b1e3bcf59ef6e57e46d774b",
"dc/dee/a01166.html#ab2b1f7bf9cce5974d1459eba268c0211",
"de/df1/a01151.html#a964fa61be5e30597c14ae6b1e24a7994a1eace6163f72a67b9f7d15e54a6293e7",
"functions_vars_r.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';