//
//  ContentView.swift
//  guessPresident
//
//  Created by Nicholas Grant on 2/23/20.
//  Copyright © 2020 nicholasgrant. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    @State private var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James K. Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford B. Hayes", "James Garfield", "Chester A. Arthur", "Grover Cleveland", "Benjamin Harrison", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren G. Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson", "Richard M. Nixon", "Gerald R. Ford", "Jimmy Carter", "Ronald Reagan", "George H. W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama", "Donald Trump"].shuffled()
    
    @State private var answerCorrect = Int.random(in: 0...2)
    @State private var showScore = false
    @State private var pointPresent = ""
    @State private var scoreUpdate = ""
    @State private var score = 0
    @State private var title = ""
    @State private var round = 1
//    @State var avatarPosition = CGPoint(x: 0, y: 0)
    @State private var showEnd = false
//    @State private var opacities = [ 1.0, 1.0, 1.0 ]
//    @State var portraitAnimation = false
    
    var body: some View {
        
        ZStack {
            LinearGradient(gradient: Gradient(colors: [.red, .white, .blue]), startPoint: .top, endPoint: .bottom).edgesIgnoringSafeArea(.all)
        
            
        VStack(spacing: 30) {
            VStack {
                Text("Tap the portrait:")
                    .font(.custom("American Typewriter", size: 20))
                .padding(10)
                    .foregroundColor(.white)
                Text(presidents[answerCorrect])
                .font(.custom("American Typewriter", size: 30))
                .foregroundColor(.white)
                .fontWeight(.bold)
                
                
            }
            
            
            ForEach(0 ..< 3) { number in
                Button(action: {
//                withAnimation(.spring()) {
//                    .opacity(self.opacities[number])
                    self.presidentTapped(number)
                    print("presidentTapped")
//                    }
                    if self.round == 11 {
                      self.resetGame()
                    }
                    self.updateResult()
                }) {
                Image(self.presidents[number])
                    .renderingMode(.original)
                    .resizable()
                    .frame(width: 155, height: 200)
                    .clipShape(Capsule())
                    .overlay(Capsule()
                    .stroke(Color.black,
                    lineWidth: 1))
                    .shadow(color: .black, radius: 2)
//                    .rotationEffect(self.portraitAnimation ? .degrees(315) : .degrees(0))
//                    .onTapGesture {
//                        self.portraitAnimation.toggle()
//                    }
                }
            }
            HStack {
                
              Spacer()
            Text("Score: \(score)")
                .font(.custom("American Typewriter", size: 20))
                     .foregroundColor(.white)
                Spacer()
                Spacer()
            Text("Round: \(round)/10")
            .font(.custom("American Typewriter", size: 20))
                     .foregroundColor(.white)
             Spacer()
                 }
        }
            
            End(isPresented: $showEnd, score: score)
            
    }
            
    .alert(isPresented: $showScore) {
      Alert(title: Text(pointPresent), message: Text(scoreUpdate), dismissButton: .default(Text("Continue")) {
        self.askQuestion()
        self.round += 1
//        if self.round == 4 {
//                  self.showEnd.toggle()
//              }
        })
        
        
    }
        
        
        
//        .onAppear() {
//            // Initialize position to center of the screen.
//            self.avatarPosition = CGPoint(x: 0, y: 0)
//        }
            
          
  }

  func presidentTapped(_ number: Int) {
    if number == answerCorrect {
      pointPresent = "Correct 👍"
      scoreUpdate = "That's \(presidents[number]), you won 1 point!"
      score += 1
//      Sound.playRightAnswerSound()
    } else {
      pointPresent = "Wrong ❌"
      scoreUpdate = "That's \(presidents[number]), you lost 1 point"
//      Sound.playWrongAnswerSound()
      if score > 0 {
        score -= 1
      }
    }

    showScore = true
  }

  func askQuestion() {
    presidents.shuffle()
    answerCorrect = Int.random(in: 0...2)
  }
    
  func updateResult() {
    print("updateResult")
        if self.round >= 10 {
            print("round is 5")
            self.showEnd = true
        }
    }
    
    func resetGame() {
        self.round = 1
        self.score = 0
//         textColor = .white
     }
    
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
