while (true) {
    console.clear();
    console.print("\1n\1g┌──────────────────────────┐\r\n");
    console.print("\1n\1g│  IBM iSeries (OS/400)    │\r\n");
    console.print("\1n\1g├──────────────────────────┤\r\n");
    console.print("\1n\1g│ 1. Work with Messages    │\r\n");
    console.print("\1n\1g│ 2. Work with Files       │\r\n");
    console.print("\1n\1g│ 3. Work with Users       │\r\n");
    console.print("\1n\1g│ 4. System Status         │\r\n");
    console.print("\1n\1g│ Q. Exit Shell            │\r\n");
    console.print("\1n\1g└──────────────────────────┘\r\n");

    console.print("\r\nEnter selection: ");
    var choice = console.getkey().toUpperCase();

    switch (choice) {
        case '1':
            console.print("\r\n\1n\1gLoading Messages...\r\n");
            bbs.exec("msglist.js");
            break;
        case '2':
            console.print("\r\n\1n\1gOpening File Area...\r\n");
            bbs.exec("filelist.js");
            break;
        case '3':
            console.print("\r\n\1n\1gOpening User List...\r\n");
            bbs.exec("userlist.js");
            break;
        case '4':
            console.print("\r\n\1n\1gSystem Status:\r\n");
            console.print(" Nodes: " + system.nodes + "  Users Online: " + system.stats.total_logons_today + "\r\n");
            break;
        case 'Q':
            console.print("\r\nExiting Shell...\r\n");
            exit();
    }
}