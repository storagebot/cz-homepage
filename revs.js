var revs =
[
  {id: "0.9.54c", date: "12/25/2003", condition: Y,
   bugs: [227402, 115680, 176506, 218070, 112089, 128304, 218421],
   desc: "fixes the initial userlist size, some strict JS warnings, and a " +
    "couple of half-op fixes. It adds the following: Copy Link Location on " +
    "all links, auto-rejoin when you're kicked, and timestamps in the " +
    "channel window! It also sports a completely new preferences window, " +
    "which works in Mozilla Firebird as well as the Mozilla Suite (please " +
    "test this lots, so we can iron out any remaining bugs in it soon)."},
  {id: "0.9.54b", date: "12/12/2003", condition: Y,
   bugs: [109814, 116803, 123664],
   desc: "fixes notify, and adds a network-pref for saving the list. There " +
    "is now a preference for the number of times connections are attempted, " +
    "Copy and Select All are now on the context menu, and there are also a " +
    "number of improved checks in the code, to fix a few theoretical bugs."},
  {id: "0.9.54a", date: "12/10/2003", condition: Y,
   bugs: [217474, 194383, 223693, 161597, 116541, 108533, 217269, 133184],
   desc: "fixes various issues, including safe channel support, better " +
    "auto-rejoin (uses channel keys), joining multiple channels, making " +
    "irc: URLs as visited in the browser, and the names command. Also adds " +
    "ircu's 330 numeric support."},
  {id: "0.9.53", date: "12/07/2003", condition: Y,
   bugs: [227139],
   desc: "fixes the fix for mIRC color codes in recent Mozilla builds " +
    "so you now see the background colors."},
  {id: "0.9.52", date: "12/07/2003", condition: G,
   bugs: [207949],
   desc: "fixes the button added in 0.9.51 for those that use 'Icons and " +
    "Text' or 'Text' for the toolbar."},
  {id: "0.9.51", date: "12/05/2003", condition: G,
   bugs: [207949],
   desc: "adds a button to Firebird's customizable toolbar to start " +
    "Chatzilla."},
  {id: "0.9.50", date: "12/04/2003", condition: G,
   bugs: [207949],
   desc: "stops the irc: URL handler trying to handle requests when " + 
    "Chatzilla is disabled in Firebird."},
  {id: "0.9.49", date: "12/03/2003", condition: G,
   bugs: [226377, 217287, 227139, 197781],
   desc: "fixes the /name command, inbound mIRC color codes, and adds a few " +
    "behind-the-scenes fixes."},
  {id: "0.9.48", date: "11/18/2003", condition: Y,
   bugs: [207949, 98251, 206080],
   desc: "adds " +
   "<a href='http://www.irc.org/tech_docs/005.html'>RPL_ISUPPORT</a> " +
   "support, halfop mode support, and properly masks key and password " +
   "dialogs."},
  {id: "0.9.47", date: "11/8/2003", condition: G,
   bugs: [220700, 224959],
   desc: "makes sure the input box has focus after switching tabs, and fixes " +
   "the meaning of ctrl-pgup/ctrl-pgdn."},
  {id: "0.9.46", date: "10/27/2003", condition: G,
   desc: "fixes a problem where CTCP ACTIONS were being displayed in the " +
   "wrong character set when they came in on an object that was not the " +
   "current tab."},
  {id: "0.9.45", date: "10/24/2003", condition: G,
   bugs: [223247],
   desc: "accounts for a recent change to the regular expression engine that " +
   "prevented ChatZilla from connecting to networks in recent Mozilla " +
   "builds."},
  {id: "0.9.44", date: "10/21/2003", condition: G,
   bugs: [217750],
   desc: "fixes some more charset related problems.  The user description " +
   "is now properly decoded for /query views, and the channel name for " +
   "mode messages."},
  {id: "0.9.43", date: "10/21/2003", condition: Y,
   bugs: [217750],
   desc: "fixes the ``unknown CTCP'' handler, so that it displays the " +
   "correct diagnostic, instead of ``my_unkctcpMsg''."},
  {id: "0.9.42", date: "10/20/2003", condition: Y,
   bugs: [217750],
   desc: "fixes charset problems with part reasons, and another " +
   "charset problem with kick messages.  It also deals with spaces in " +
   "nicknames and usernames by replacing them with underscores, instead " +
   "of just failing to log in.  This revision also makes it so that you " +
   "no longer need to restart ChatZilla after changing your description " +
   "or username."},
  {id: "0.9.41", date: "10/15/2003", condition: Y,
   bugs: [217750],
   desc: "adds an ``" +
   "<a href='http://www.hacksrus.com/~ginda/chatzilla/faq/#autoperform'>autoperform</a>" +
   "'' pref to networks that can be used to " +
   "execute arbitrary ChatZilla commands when you connect to a network. " +
   "These autoperform commands will be executed <b>before</b> any of your " +
   "``Open At Startup'' channels are processed.  This release also makes " +
   "ChatZilla recognize the optional ``reason'' parameter for PART messages. " +
   "Many IRC servers do not yet support PART reasons, so don't be surprised " +
   "if you don't see any."},
  {id: "0.9.40", date: "10/10/2003", condition: G,
   bugs: [221068, 220839, 217358, 207182, 213782],
   desc: "fixes log file names for channels with encoded names, and fixes " +
   "the channel name displayed in the status bar for same."},
  {id: "0.9.39", date: "10/10/2003", condition: Y,
   bugs: [221068, 220839, 217358, 207182, 213782],
   desc: "fixes even more charset related bugs, including QUIT, WHOIS, and " +
   "KICK messages, messages in private tabs, and issues with urls to " +
   "encoded channel names."},
  {id: "0.9.38", date: "10/08/2003", condition: Y,
   bugs: [221068, 220839, 217358, 207182, 213782],
   desc: "makes ChatZilla pay attention to the ``Open At Startup'' list " +
   "when launched from an otherwise empty irc url.  This means that if you " +
   "start ChatZilla from a bookmark for ``irc:'', your startup URLs will " +
   "be honored, but if you start from ``irc://whatever'', only the target " +
   "url will be visited."},
  {id: "0.9.37", date: "10/08/2003", condition: Y,
   bugs: [221068, 220839, 217358, 207182, 213782],
   desc: "fixes ``,needpass'' and ``charset='' in irc urls."},
  {id: "0.9.36", date: "10/03/2003", condition: Y,
   bugs: [221068, 220839, 217358, 207182],
   desc: "fixes a number of character encoding related bugs (some of which " +
   "were not filed in bugzilla), along with some non-charset related cleanup."},
  {id: "0.9.35", date: "8/27/2003", condition: G,
   bugs: [156928, 161206],
   desc: "fixed the /list command when used without a <channel-name> " +
   "parameter."},
  {id: "0.9.34", date: "8/26/2003", condition: Y,
   bugs: [156928, 161206],
   desc: "fixes the ``cx.network.getUser is not a function'' problem, and " +
  "makes it possible to do in-place topic editing if you are not a chanop " +
  "as long as the channel mode is not +t."},
  {id: "0.9.33", date: "8/25/2003", condition: Y,
   bugs: [156928, 161206],
   desc: "prevents hidden views from coming back when you change your nick " +
   ":/"},
  {id: "0.9.32", date: "8/25/2003", condition: Y,
   bugs: [156928, 161206],
   desc: "fixes a problem where you might end up seeing nick change messages " +
   "in channels that you'd apparently left, and makes YOUR nickname changes " +
   "show up in each channel you're in (plus the network tab), instead of " +
   "just the channel you happened to be looking at."},
  {id: "0.9.31", date: "8/24/2003", condition: Y,
   bugs: [156928, 161206],
   desc: "makes it so that clicking on a link in the channel topic does " +
   "<b>not</b> activate in-place editing."},
  {id: "0.9.30", date: "8/24/2003", condition: Y,
   bugs: [156928, 161206],
   desc: "brings back in-place editing of channel topics, and includes irc " +
   " urls in disconnect messages."},
  {id: "0.9.29", date: "8/23/2003", condition: Y,
   bugs: [156928],
   desc: "brings back the green lights by popular demand.  If you prefer " +
   "the @ and + symbols, enable the ``Show Mode as Symbol'' option in the " +
   "userlist context menu.  This revision finally fixes some issued with " +
   "mass op/deop/voice/devoices issued from the userlist context menu, " +
   "fixes a regression displaying KICK messages, fixes problems connecting " +
   "to ports other than 6667, and fixes some userlist sorting issues."},
  {id: "0.9.28", date: "8/16/2003", condition: G,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202,
          212747],
   desc: "fixes the size of the main pref panel and fixes the /log command."},
  {id: "0.9.27", date: "8/16/2003", condition: Y,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202],
   desc: "Adds the ability to sort users independent of their channel mode, " +
   "fixes a problem where right clicking on a tab would cause it to be " +
   "focused, prevents the two-tabs-with-focus problem when deleting a " +
   "tab that is not the current tab, makes sure the userlist stays " +
   "sorted when switching views, and removes the extra margin around the " +
   "userlist."},
  {id: "0.9.26", date: "8/15/2003", condition: Y,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202],
   desc: "removes the old op/voice lights in favor of more traditional " +
   "@ and + graphics, combined into a single column.  This revision also " +
   "displays your op/voice status as part of the nickname to the left of " +
   "the input box."},
  {id: "0.9.25", date: "8/15/2003", condition: Y,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202],
   desc: "fixes op/voice lights in older builds, <b>again</b>."},
  {id: "0.9.24", date: "8/15/2003", condition: Y,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202],
   desc: "is 0.9.23 merged with the 1.5b trunk."},
  {id: "0.9.23", date: "8/15/2003", condition: Y,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202],
   desc: "fixes the deleteOnPart pref."},
  {id: "0.9.22", date: "8/15/2003", condition: Y,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202],
   desc: "fixes <a href='http://bugzilla.mozilla.org/show_bug.cgi?id=216202'>" +
   "bug 216202</a> for real."},
  {id: "0.9.21", date: "8/15/2003", condition: Y,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202],
   desc: "fixes a problem with /whois and problems with op/voice icons on " +
   "pre 1.5 mozilla builds."},
  {id: "0.9.20", date: "8/15/2003", condition: Y,
   bugs: [103378, 115214, 116013, 117848, 119847, 121152, 126116, 133011,
          136528, 144053, 161206, 180873, 198548, 198823, 200413, 201504,
          204475, 206003, 206177, 206178, 207182, 207349, 208376, 211461,
          211518, 213037, 213097, 214591, 215730, 216018, 216120, 216202],
   desc: "completes the pref and message conversion, and merges in " +
   "recent trunk changes.  Most of the extra bugs were fixed in previous " +
   "0.9.x releases but not properly accounted for."},
  {id: "0.9.19", date: "8/14/2003", condition: Y,
   bugs: [210744, 133011, 198823, 213037, 215730, 216018, 216120, 216202,
          213097, 214591],
   desc: "fixes a typo in the /join help text, and opens the correct pref " +
   "branch in response to Edit->Preferences."},
  {id: "0.9.18", date: "8/14/2003", condition: Y,
   bugs: [210744, 133011, 198823, 213037, 215730, 216018, 216120, 216202],
   desc: "fixes some issues with tab focus."},
  {id: "0.9.17", date: "8/14/2003", condition: Y,
   bugs: [210744, 133011, 198823, 213037, 215730, 216018, 216120, 216202],
   desc: "adds tab completion to query views, fixes the number of parameters " +
   "in the /query command, fixes a few issues with channel tabs, properly " +
   "displays the statusbar when chatzilla is invoked from a url, and fixes " +
   "the ctrl + pgup/pgdn keyboard shortcuts.  This revision also adds a " +
   "``focusChannelOnJoin'' preference, which you can adjust with the " +
   "/pref command."},
  {id: "0.9.16", date: "8/13/2003", condition: Y,
   bugs: [210744, 133011, 198823, 213037, 215730, 216018],
   desc: "quiets down some charset related debug messages and fixes URLs " +
   "in query views"},
  {id: "0.9.15", date: "7/23/2003", condition: Y, bugs: [210744, 198823],
   desc: "moves chanop related commands under their own sub-menu."},
  {id: "0.9.14", date: "7/21/2003", condition: R, bugs: [210744, 198823],
   desc: "fixes the /leave and /part commands."},
  {id: "0.9.13", date: "7/21/2003", condition: R, bugs: [210744, 198823],
   desc: "fixes regressions involving the /clear and /quit commands, " +
   "adds new global prefs for logging by view type, adds log file " +
   "name prefs, makes collapse-messages a per view pref, and adds " +
   "a little more structure to the plugin code.  By default, log " +
   "files are written to $profile/chatzilla/logs, instead of " +
   "just $profile/.  Do not be alarmed."},
  {id: "0.9.12", date: "7/19/2003", condition: R, bugs: [210744, 198823],
   desc: "fixes a problem loading startup scripts, and compacts the " +
   "header a bit.  I removed the -moz-opacity setting from " +
   "the header because it seemed to be causing a memory leak, " +
   "we'll have to see about that one."},
  {id: "0.9.11", date: "7/19/2003", condition: R, bugs: [210744, 198823],
   desc: "fixes a few more pref bugs."},
  {id: "0.9.10", date: "7/19/2003", condition: R, bugs: [210744, 198823],
   desc: "fixes a bug that affected certain types of preferences."},
  {id: "0.9.9", date: "7/19/2003", condition: R, bugs: [210744, 198823],
   desc: "fixes some timing related issues with 0.9.8."},
  {id: "0.9.8", date: "7/19/2003", condition: R, bugs: [210744, 198823],
   desc: "marks the first big UI change in a while.  It moves the " +
   "header area into the " +
   "<a href='screenshots/jsirc-20030719.gif'>message window</a>, " +
   "which makes things look much better.  A number of big regressions " +
   "are also fixed in this release: default commands, tooltips, " +
   "userlist issues, and /nick issues.  In addition to all that " +
   "good news, there's a new usermode preference, and " +
   "some new structure for the plugin functionality."},
  {id: "0.9.7", date: "7/18/2003", condition: R, bugs: [210744, 198823],
   desc: "applies kazhik's patch from bug 198823, properly handles " +
   "exceptions caused by plugin scripts, and fixes parameter types " +
   "for the /quote and /pref commands."},
  {id: "0.9.6", date: "7/18/2003", condition: R, bugs: [210744],
   desc: "adds the charset pref to network, channel, and user objects, " +
   "and cleans up some of the string en/decoding code.  Also new " +
   "is the ability to set auto-reconnect on a per network basis.  " +
   "This release " +
   "also fixes regressions with the double-tab behavior, and " +
   "duplicate query tabs on reconnect."},
  {id: "0.9.5", date: "7/17/2003", condition: R, bugs: [210744],
   desc: "merges in Silver's patch from comment " +
   "<a href='http://bugzilla.mozilla.org/show_bug.cgi?id=210744#c16'>16</a>, " +
   "fixes some problems with irc: urls, adds the ability to set " +
   "motifs on a per-network and per-channel basis, introduces the " +
   "ability to change the HTML file used for the message window, and " +
   "adds some generic commands to read and change network and channel " +
   "specific preferences.  This revision should also " +
   "fix ctrl/alt-click functionality when clicking on urls, and  " +
   "adds the much anticipated context-menus-on-tabs."},
  {id: "0.9.4", date: "7/15/2003", condition: R, bugs: [210744],
   desc: "makes context menus work when used over links, on Windows."},
  {id: "0.9.3", date: "7/15/2003", condition: R, bugs: [210744],
   desc: "fixes a problem updating the stalk list when you change " +
   "your nickname."},
  {id: "0.9.2", date: "7/15/2003", condition: R, bugs: [210744],
   desc: "applies Silver's fixes from comments " +
   "<a href='http://bugzilla.mozilla.org/show_bug.cgi?id=210744#c3'>3</a>" +
   " and " +
   "<a href='http://bugzilla.mozilla.org/show_bug.cgi?id=210744#c4'>4</a>" +
   ", fixes a problem where nick changes didn't display properly, and " +
   "finally adds `Open in New Window' and 'Open in New Tab' options " +
   "to the context menu."},
  {id: "0.9.1", date: "7/13/2003", condition: R, bugs: [210744],
   desc: "fixes a little regression with irc urls."},
  {id: "0.9.0", date: "7/13/2003", condition: R, bugs: [210744],
   desc: "is the first in the new 0.9.x series.  Large parts of the " +
   "code have been renovated.  We've got new command and menu " +
   "management, straight out of " +
   "<a href='http://www.hacksrus.com/~ginda/venkman/'>Venkman</a>. " +
   "There will probably be a number of regressions in here, so " +
   "watch out.  You can always downgrade to 0.8.x if there is a " +
   "problem.  Check out the bug for more details."},
  {id: "0.8.34", date: "6/21/2003", condition: G,
   bugs: [80125, 114104, 198538, 200097, 114744, 200188, 199201, 202644,
          184228, 206915, 86526, 209524, 198823, 193246, 205792, 201324],
   desc: "Adds a ``stalk whole words only'' option, and properly " +
   "updates the stalk list and motif settings when they " +
   "are changed from the pref panel."},
  {id: "0.8.33", date: "6/18/2003", condition: Y,
   bugs: [80125, 114104, 198538, 200097, 114744, 200188, 199201, 202644,
          184228, 206915, 86526, 209524, 198823, 193246, 205792, 201324],
   desc: "applies a large number of patches that had been sitting in " +
   "bugzilla for a while now.  Among the more interesting fixes: " +
   "Delete View finally /parts the channel first, stalk words " +
   "can now contain special characters, column sort order should " +
   "stay current, a number of places that used to lowercase " +
   "nicknames have been fixed, and close window/close view " +
   "have been disambiguated.  Thanks to <b>ssieb</b>, " +
   "<b>kazhik</b>, and <b>Silver</b> for all their patches."},
  {id: "0.8.32", date: "6/11/2003", condition: Y, bugs: [80125],
   desc: "finally <b>adds logging</b>.  Thanks ssieb!"},
  {id: "0.8.31", date: "5/21/2003", condition: G,
   desc: "fixes a problem where the description field in a /whois " +
   "reply ignored the default character set preference."},
  {id: "0.8.30", date: "5/17/2003", condition: Y,
   bugs: [206066, 193246],
   desc: "fixed a bug where if you had multiple networks set to open " +
   "at startup, they would open in reverse order.  It also fixes " +
   "a problem with /list on some servers."},
  {id: "0.8.29", date: "5/04/2003", condition: Y,
   bugs: [204348],
   desc: "<b>actually</b> fixes bug 204348"},
  {id: "0.8.28", date: "5/03/2003", condition: Y,
   bugs: [204348, 204347],
  desc: "fixes two regressions introduced in 0.8.27"},
  {id: "0.8.27", date: "4/30/2003", condition: Y,
   bugs: [119746],
   desc: "makes it possible to set a character set per channel, " +
   "independent of the default character set.  The new commands " +
   "are /channel-charset, to change the character set for an " +
   "existing channel, and /join-charset to join a new channel " + 
   "with a specific character set.  Also irc: urls now support " +
   "the charset parameter, as in " +
   "irc://moznet/mozillazine-jp?charset=iso-2022-jp"},
  {id: "0.8.26", date: "4/09/2003", condition: G,
   bugs: [133011, 189682, 190747, 199067, 180577, 199068, 199234,
          199830],
   desc: "fixes tab completion and ctrl-pgup/pgdn, adds the ability to " +
   "compose messages with mIRC color codes (<i>gasp</i>), makes " +
   "channel windows not show up intil the server responds, " +
   "removes some of the show/hide keybindings, and a few other " +
   "fixes."},
  {id: "0.8.25", date: "3/25/2003", condition: G,
  bugs: [169804, 162251, 178313, 196265, 197024, 198843],
  desc: "makes ChatZilla remember the state of multi-line mode and " +
  "window maximization between invocations, fixes a problem with " +
  "the /names command, and a number of other minor fixes."},
  {id: "0.8.24", date: "3/7/2003", condition: Y,
  bugs: [194287, 194184, 160295],
  desc: "fixes the problem with the userlist in channels with users " +
  "with accented characters in their nicknames.  It also " +
  "fixes problems with automatic and manual nickname changes " +
  "made during login.  This release also keeps the message " +
  "view from getting focus on Unixish systems."},
  {id: "0.8.23", date: "2/21/2003", condition: G,
  bugs: [190210, 190777, 190568, 191910, 190532, 124638, 191500],
  desc: "adds some accesskeys to the pref panels, makes literal " +
  "tab characters show up as four spaces, and allows nesting " +
  "of the ``smart formatting'' characters.  See the " +
  "<a href='http://www.hacksrus.com/~ginda/chatzilla/screenshots/jsirc-20030221.gif'>screenshot</a> " +
  "if you're not sure what that means."},
  {id: "0.8.22", date: "2/16/2003", condition: Y,
  bugs: [190210, 190777, 190568, 191910, 190532, 124638, 191500],
  desc: "fixes a problem where ChatZilla would linkify times."},
  {id: "0.8.21", date: "2/15/2003", condition: Y,
  bugs: [190210, 190777, 190568, 191910, 190532, 124638, 191500],
  desc: "fixes a problem where ChatZilla would strip leading and " +
  "trailing spaces from the input line before submitting them." +
  "You can now type `` /foo'' and not have ChatZilla try to " +
  "execute the command ``foo''."},
  {id: "0.8.20", date: "2/15/2003", condition: Y,
  bugs: [190210, 190777, 190568, 191910, 190532, 124638, 191500],
  desc: "adds the reconnect option to the pref panel and makes the " +
  "tree items in the pref panel localizable."},
  {id: "0.8.19", date: "2/14/2003", condition: Y,
  bugs: [190210, 190777, 190568, 191910, 190532, 124638],
  desc: "fixes URL parsing such that trailing punctuation is no longer " +
  "included in the URL, and URLs from bogus schemes are not " + 
  "linked."},
  {id: "0.8.18", date: "2/13/2003", condition: Y,
  bugs: [190210, 190777, 190568, 191910, 190532, 124638],
  desc: "adds auto-reconnect to ChatZilla.  There might be a bug or " +
  "two, so please say something in " +
  "<a href='irc://moznet/chatzilla/'>#chatzilla</a> if you " +
  "notice anything strange."},
  {id: "0.8.17", date: "2/12/2003", condition: Y,
  bugs: [190210, 190777, 190568, 191910, 190532, 124638],
  desc: "keeps ChatZilla from stealing focus when the window does " +
  "not already have focus, and includes some regression fixes " +
  "for the networking changes from 0.8.14."},
  {id: "0.8.16", date: "1/30/2003", condition: Y,
  bugs: [190210, 190777, 190568, 191910, 190532],
  desc: "converts `` and '' quotes into the unicode double quote " +
  "characters, \u201c and \u201d.  It also denies irc: " +
  "urls that point to conspicuous ports."},
  {id: "0.8.15", date: "1/30/2003", condition: Y,
  bugs: [190210, 190777, 190568],
  desc: "fixes the title of the pref panels, and a problem with the " +
  "pref listboxes."},
  {id: "0.8.14", date: "1/25/2003", condition: Y,
  bugs: [190568],
  desc: "reworks some of the irc library ChatZilla is based on.  This " +
  "should help us act more consistently across networks.  " +
  "Please file any bugs you run into.  Does <b>not</b> include " +
  "the changes from 0.8.13b."},
  {id: "0.8.13b", date: "1/30/2003", condition: G,
  bugs: [190210, 190777],
  desc: "fixes the title of the pref panels, and a problem with the " +
  "pref listboxes."},
  {id: "0.8.13", date: "1/23/2003", condition: G,
  bugs: [190395, 23265, 133561, 109993],
  desc: "fixes the missing main ChatZilla pref panel, and opens the " +
  "ChatZilla section of prefs by default.  It also includes " +
  "port numbers in channel links when you're connected to " +
  "any port except 6667, and comes close to fixing a " +
  "scrolling problem."},
  {id: "0.8.12", date: "1/22/2003", condition: G,
  bugs: [23265, 122782, 149588, 131633, 184244, 187699],
  desc: "adds James Ross'  pref panel, fixes the keyboard shortcut " +
  "for ``Leave Channel'' and ``Close View'', adds UI for the " +
  "multiline input mode, adds tab completion for channel names, " +
  "fixes a bug where networks added from a startup script didn't " +
  "show in the list displayed in the *client* tab at startup. " +
  "It also adds key= and pass= parameters to irc: urls, " +
  "and fixes ``secret'' channel mode."},
  {id: "0.8.11", date: "11/11/2002", condition: G,
  desc: "adds a /rlist command to safely list all channels on a " +
  "network, and optionally only display channels that match a " +
  "user supplied pattern.  This revision also fixes the /hide " +
  "command, and nick list sorting on newer versions of Mozilla."},
  {id: "0.8.10", date: "9/4/2002", condition: G,
  bugs: [165901, 165875, 165868, 137892],
  desc: "adds CLIENTINFO and TIME CTCP handlers, fixes a " +
  "regression introduced by post 1.1 builds, and fixes " +
  "some problems saving preferences."},
  {id: "0.8.9", date: "8/8/2002", condition: G, bugs: [133472, 131498],
  desc: "makes tab switching faster, and fixes issues with encoded " +
  "channel names.  It also fixes a problem resolving irc urls " +
  "for networks that are added via a startup script."},
  {id: "0.8.8", date: "5/24/2002", condition: G, bugs: [139334],
  desc: "adds the /squery command"},
  {id: "0.8.7", date: "5/23/2002", condition: G,
  desc: "fixes a few bugs, and syncs with the latest XUL syntax."},
  {id: "0.8.5", date: "12/12/2001", bugs: [103386], condition: G,
  desc: "was distributed with Mozilla 0.9.7.  New features are mirc " +
  "colors, character sets, /query urls, and more.  Check the " +
  "bug or ChangeLog for full details."},
  {id: "0.8.4", date: "8/23/2001", bugs: [89713], condition: G,
  desc: "started out as an effort to merge in the changes from 0.8.1x " +
  "but turned into a larger project.  Now, it fixes the 10 bugs " +
  "listed in 89713, and adds cool things like a context menu in " +
  "the output window, the ability to highlight individual users " +
  "messages retroactivley, the ability to drag tabs into your " +
  "bookmarks, keyboard shortcuts and extra menu items, and " +
  "probably some stuff I forgot."},
  {id: "0.8.3", date: "6/17/2001", bugs: [27805], condition: G,
  desc: "adds localizable strings.  Bidi will still be a problem in " +
  "some cases, but if you've been itching to translate chatzilla " +
  "into your favorite left-to-right language, now is the time."},
  {id: "0.8.2", date: "6/6/2001", bugs: [79311, 75226], condition: G,
  desc: "clears up connection troubles described in bug 79311, and has " +
  "updated XUL to work with 0.9.0 and higher.  Won't work on " +
  "most pre-0.9.0 builds."},
  {id: "0.8.1b", date: "3/21/2001", 
  desc: "contains the same changes as the 0.8.1a release, but works " +
  "with builds after 3/21/2001.  THIS VERSION WILL NOT WORK ON " +
  "MOZILLA 0.8.1 (OR EARLIER)"},
  {id: "0.8.1a", date: "3/21/2001", 
  desc: "adds the /css command, drag-and-drop links, timestamps (hover " +
  "your mouse over the nickname), automatic channel " +
  "linkifying, and some random CSS changes.  This " +
  "is the last revision that will work on pre 3/21/2001 builds.  " +
  "If you're running something more recent than that, get " +
  "0.8.1b instead.  If you're running Mozilla 0.8.1, you should " +
  "upgrade to this version."},
  {id: "0.8.0", date: "3/13/2001", condition: G, bugs: [71468],
  desc: "can be installed on Netscape 6/6.01, " +
  "and Mozilla 0.8.0/0.8.1.  Because of changes to the XUL " +
  "syntax, this version will not run on builds on or after " +
  "3/21/2001"}
];
