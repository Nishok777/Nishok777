import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Premium Reports',
      theme: ThemeData.dark(),
      home: PremiumReportsPage(),
    );
  }
}

class PremiumReportsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        backgroundColor: Color(0xFF181824), // Background color set to #181824
        appBar: AppBar(
          title: Text("Premium Reports"),
          leading: Icon(Icons.arrow_back),
          actions: [
            IconButton(onPressed: () {}, icon: Icon(Icons.videocam)),
            IconButton(onPressed: () {}, icon: Icon(Icons.notifications)),
          ],
          bottom: PreferredSize(
            preferredSize: Size.fromHeight(100.0),
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                  child: TextField(
                    decoration: InputDecoration(
                      hintText: 'Search Marriage, Career, etc.',
                      hintStyle: TextStyle(
                        color: Colors.grey[400], // Ensures the placeholder is visible
                      ),
                      prefixIcon: Icon(Icons.search, color: Colors.grey),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(25.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    style: TextStyle(color: Colors.black), // Text color inside the TextField
                  ),
                ),
                TabBar(
                  indicatorColor: Colors.blue,
                  tabs: [
                    Tab(text: 'Marriage'),
                    Tab(text: 'Career'),
                    Tab(text: 'Family'),
                    Tab(text: 'Health'),
                  ],
                ),
              ],
            ),
          ),
        ),
        body: TabBarView(
          children: [
            ReportList(),
            Center(child: Text("Career Reports")),
            Center(child: Text("Family Reports")),
            Center(child: Text("Health Reports")),
          ],
        ),
      ),
    );
  }
}

class ReportList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.all(16.0),
      children: [
        ReportCard(), // Displaying one card instead of two
      ],
    );
  }
}

class ReportCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      color: Color(0xFF1F2033), // Card color set to #1F2033
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    '₹999.00',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.white, // Text color inside the card
                    ),
                  ),
                ),
                Row(
                  children: [
                    Icon(Icons.star, color: Colors.yellow),
                    Text(
                      '4.95/5',
                      style: TextStyle(color: Colors.white), // Rating color inside the card
                    ),
                  ],
                ),
              ],
            ),
          ),
          // Adding border radius to the image using ClipRRect
          ClipRRect(
            borderRadius: BorderRadius.circular(12), // Border radius for the image
            child: Container(
              height: 200,
              child: Image.asset(
                'assets/marriage_image.jpeg',
                fit: BoxFit.cover,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "Marriage Timing Prediction\nDiscover the perfect timing for your marriage through the guidance of Vedic Astrology and an advanced AI-ML model.",
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16, color: Colors.white), // Text color inside the card
            ),
          ),
         Padding(
  padding: const EdgeInsets.all(8.0),
  child: Row(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
      // View Button
      OutlinedButton.icon(
        onPressed: () {},
        icon: Icon(
          Icons.info,
          color: Colors.white,
        ),
        label: Text(
          "View",
          style: TextStyle(color: Colors.white),
        ),
        style: OutlinedButton.styleFrom(
          side: BorderSide(
            color: Colors.white, // White border for "View"
            width: 2,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(30), // Rounded corners
          ),
          padding: EdgeInsets.symmetric(horizontal: 20, vertical: 15), // Padding to match button size
        ),
      ),
      
      // Purchase Button
      ElevatedButton.icon(
        onPressed: () {},
        icon: Icon(
          Icons.shopping_cart,
          color: Colors.white,
        ),
        label: Text("Purchase"),
        style: ElevatedButton.styleFrom(
          primary: Colors.blueAccent, // Blue color for "Purchase"
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(30), // Rounded corners
          ),
          padding: EdgeInsets.symmetric(horizontal: 20, vertical: 15), // Padding to match button size
        ),
      ),
    ],
  ),
),

        ],
      ),
    );
  }
}
