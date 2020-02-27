//
//  GameBoard.swift
//  guessPresident
//
//  Created by Nicholas Grant on 2/24/20.
//  Copyright © 2020 nicholasgrant. All rights reserved.
//

import Foundation
//
//  GameBoard.swift
//  GameKit
//
//  Created by Nien Lam on 2/20/20.
//  Copyright © 2020 Mobile Lab. All rights reserved.
//

import SwiftUI

struct GameBoard: View {
    @Binding var avatarPosition: CGPoint
    
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                Color.blue.opacity(0.26)
                
                // Place collision objects.
//                CollisionObject(position: CGPoint(x: 100, y: 200), avatarPosition: self.avatarPosition)
//
//                CollisionObject(position: CGPoint(x: 300, y: 300), avatarPosition: self.avatarPosition)
//
//                CollisionObject(position: CGPoint(x: 150, y: 500), avatarPosition: self.avatarPosition)
//                
//                 CollisionObject(position: CGPoint(x: 300, y: 100), avatarPosition: self.avatarPosition)
                
                // Place avatar.
                Avatar(position: self.$avatarPosition)
            }
                
                

            .border(Color.blue, width: 6.0)
        }
    }
}

struct GameBoard_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            GameBoard(avatarPosition: .constant(CGPoint(x: geometry.size.width / 2, y: geometry.size.height / 2)))
        }
    }
}
