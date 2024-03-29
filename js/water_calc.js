           f u n c t i o n   p e r R o u n d ( n u m ,   p r e c i s i o n )   { 
             v a r   p r e c i s i o n   =   3 ;   / / d e f a u l t   v a l u e   i f   n o t   p a s s e d   f r o m   c a l l e r ,   c h a n g e   i f   d e s i r e d 
             / /   r e m a r k   i f   p a s s e d   f r o m   c a l l e r 
             p r e c i s i o n   =   p a r s e I n t ( p r e c i s i o n ) ;   / /   m a k e   c e r t a i n   t h e   d e c i m a l   p r e c i s i o n   i s   a n   i n t e g e r 
                     v a r   r e s u l t 1   =   n u m   *   M a t h . p o w ( 1 0 ,   p r e c i s i o n ) ; 
                     v a r   r e s u l t 2   =   M a t h . r o u n d ( r e s u l t 1 ) ; 
                     v a r   r e s u l t 3   =   r e s u l t 2   /   M a t h . p o w ( 1 0 ,   p r e c i s i o n ) ; 
                     r e t u r n   z e r o s P a d ( r e s u l t 3 ,   p r e c i s i o n ) ; 
             } 
 
             f u n c t i o n   z e r o s P a d ( r n d V a l ,   d e c P l a c e s )   { 
                     v a r   v a l S t r g   =   r n d V a l . t o S t r i n g ( ) ;   / /   C o n v e r t   t h e   n u m b e r   t o   a   s t r i n g 
                     v a r   d e c L o c   =   v a l S t r g . i n d e x O f ( " . " ) ;   / /   L o c a t e   t h e   d e c i m a l   p o i n t 
                     / /   c h e c k   f o r   a   d e c i m a l 
                     i f   ( d e c L o c   = =   - 1 )   { 
                             d e c P a r t L e n   =   0 ;   / /   I f   n o   d e c i m a l ,   t h e n   a l l   d e c i m a l   p l a c e s   w i l l   b e   p a d d e d   w i t h   0 s 
                             / /   I f   d e c P l a c e s   i s   g r e a t e r   t h a n   z e r o ,   a d d   a   d e c i m a l   p o i n t 
                             v a l S t r g   + =   d e c P l a c e s   >   0   ?   " . "   :   " " ; 
                     } 
                     e l s e   { 
                             d e c P a r t L e n   =   v a l S t r g . l e n g t h   -   d e c L o c   -   1 ;   / /   I f   t h e r e   i s   a   d e c i m a l   a l r e a d y ,   o n l y   t h e   n e e d e d   d e c i m a l   p l a c e s   w i l l   b e   p a d d e d   w i t h   0 s 
                     } 
                       v a r   t o t a l P a d   =   d e c P l a c e s   -   d e c P a r t L e n ;         / /   C a l c u l a t e   t h e   n u m b e r   o f   d e c i m a l   p l a c e s   t h a t   n e e d   t o   b e   p a d d e d   w i t h   0 s 
                     i f   ( t o t a l P a d   >   0 )   { 
                             / /   P a d   t h e   s t r i n g   w i t h   0 s 
                             f o r   ( v a r   c n t r V a l   =   1 ;   c n t r V a l   < =   t o t a l P a d ;   c n t r V a l + + ) 
                                     v a l S t r g   + =   " 0 " ; 
                             } 
                     r e t u r n   v a l S t r g ; 
             } 
             / /   s e n d   t h e   v a l u e   i n   a s   " n u m "   i n   a   v a r i a b l e 
 
             / /   c l e a r s   f i e l d   o f   d e f a u l t   v a l u e 
             f u n c t i o n   c l e a r _ f i e l d ( f i e l d )   { 
             i f   ( f i e l d . v a l u e = = f i e l d . d e f a u l t V a l u e )   { 
             f i e l d . v a l u e = ' ' 
             } 
             } 
 
             f u n c t i o n   c o m p u t e ( f o r m )     { 
             v a r   b a t h t o t a l   =   M a t h . r o u n d ( ( ( f o r m . s h o w e r s . v a l u e   *   f o r m . s h o w e r m i n . v a l u e   *   f o r m . s h o w e r f l o w . v a l u e )   +   ( f o r m . b a t h s . v a l u e   /   7   *   4 0 ) ) / f o r m . p e o p l e . v a l u e ) ; 
             v a r   t o i l e t d a y   =   M a t h . r o u n d ( ( f o r m . p e o p l e . v a l u e   *   f o r m . t o i l e t f l o w . v a l u e   *   f o r m . t o i l e t f l u s h . v a l u e ) / f o r m . p e o p l e . v a l u e ) ; 
             v a r   f a u c e t d a y   =   M a t h . r o u n d ( ( f o r m . f a u c e t . v a l u e   *   f o r m . p e o p l e . v a l u e   *   f o r m . f a u c e t m i n . v a l u e   *   3 ) / f o r m . p e o p l e . v a l u e ) ; 
             v a r   d i s h w a s h e r d a y   =   M a t h . r o u n d ( ( ( f o r m . d i s h w a s h e r . v a l u e   *   f o r m . d i s h w a s h e r f l o w . v a l u e ) / 7 ) / f o r m . p e o p l e . v a l u e ) ; 
             v a r   l a u n d r y d a y   =   M a t h . r o u n d ( ( ( f o r m . l a u n d r y . v a l u e   *   f o r m . l a u n d r y l o a d . v a l u e ) / 7 ) / f o r m . p e o p l e . v a l u e ) ; 
             v a r   d i s h d a y   =   M a t h . r o u n d ( ( f o r m . d i s h h a n d . v a l u e   *   f o r m . d i s h m i n . v a l u e   *   3 ) / f o r m . p e o p l e . v a l u e ) ; 
 
    //  f o r m . c a r l o a d . v a l u e ) / 7 ) / f o r m . p e o p l e . v a l u e ) ; 
             v a r   c a r d a y   =   M a t h . r o u n d ( ( f o r m . c a r h a n d . v a l u e   *   f o r m . c a r m i n . v a l u e   *   3 ) / f o r m . p e o p l e . v a l u e ) ; 
 
             v a r   l a w n d a y   =   M a t h . r o u n d ( ( ( f o r m . l a w n . v a l u e   *   f o r m . l a w n m i n . v a l u e   *   1 5 ) / 7 ) / f o r m . p e o p l e . v a l u e ) ; 
             v a r   o t h e r d a y   =   M a t h . r o u n d ( ( ( f o r m . o t h e r . v a l u e   *   1 0 ) / 7 ) / f o r m . p e o p l e . v a l u e ) ; 
             v a r   i n d o o r d a y   =   M a t h . r o u n d ( b a t h t o t a l   +   t o i l e t d a y   +   f a u c e t d a y   +   l a u n d r y d a y   +   d i s h w a s h e r d a y   +   d i s h d a y ) ; 
             v a r   o u t d o o r d a y   =   M a t h . r o u n d ( l a w n d a y   +   o t h e r d a y ) ; 
             v a r   t o t a l d a y   =   M a t h . r o u n d ( i n d o o r d a y   +   o u t d o o r d a y ) ; 
             v a r   t o t a l m o n t h   =   M a t h . r o u n d ( t o t a l d a y   *   3 0 . 4 ) ; 
             v a r   t o t a l y e a r   =   M a t h . r o u n d ( t o t a l d a y   *   3 6 5 ) ; 
             v a r   D W A d a y   =   2 0 7 ; 
             v a r   D W A m o n t h   =   D W A d a y * 3 0 ; 
             v a r   D W A y e a r   =   D W A d a y * 3 6 5 ; 
             f o r m . b a t h t o t a l . v a l u e   =   b a t h t o t a l ; 
             f o r m . t o i l e t d a y . v a l u e   =   t o i l e t d a y ; 
             f o r m . f a u c e t d a y . v a l u e   =   f a u c e t d a y ; 
             f o r m . l a u n d r y d a y . v a l u e   =   l a u n d r y d a y ; 
             f o r m . d i s h w a s h e r d a y . v a l u e   =   d i s h w a s h e r d a y ; 
             f o r m . d i s h d a y . v a l u e   =   d i s h d a y ; 
             f o r m . l a w n d a y . v a l u e   =   l a w n d a y ; 
             f o r m . o t h e r d a y . v a l u e   =   o t h e r d a y ; 
             f o r m . i n d o o r d a y . v a l u e   =   i n d o o r d a y ; 
             f o r m . o u t d o o r d a y . v a l u e   =   o u t d o o r d a y ; 
             f o r m . t o t a l d a y . v a l u e   =   t o t a l d a y ; 
             f o r m . t o t a l m o n t h . v a l u e   =   t o t a l m o n t h ; 
             f o r m . t o t a l y e a r . v a l u e   =   t o t a l y e a r ; 
             f o r m . D W A d a y . v a l u e   =   D W A d a y ; 
             f o r m . D W A m o n t h . v a l u e   =   D W A m o n t h ; 
             f o r m . D W A y e a r . v a l u e   =   D W A y e a r ; 
 
                   i f ( ( f o r m . D W A d a y . v a l u e - f o r m . t o t a l d a y . v a l u e ) > 0 )   { 
 
                                         f o r m . u s e a g e . v a l u e   =   ( " E v e r y   y e a r ,   y o u r   h o u s e h o l d   u s e s   "   +   ( f o r m . D W A y e a r . v a l u e   -   f o r m . t o t a l y e a r . v a l u e )   +   "   g a l l o n s   p e r   c a p i t a   L E S S   t h a n   t h e   D e s e r t   W a t e r   A g e n c y   p e r   c a p i t a   w a t e r   u s e a g e . " ) ; 
 
                                         } 
                                         e l s e   { 
             f o r m . u s e a g e . v a l u e   =   ( " E v e r y   y e a r ,   y o u r   h o u s e h o l d   u s e s   "   +   ( f o r m . t o t a l y e a r . v a l u e - f o r m . D W A y e a r . v a l u e   )   +   "   g a l l o n s   p e r   c a p i t a   M O R E   t h a n   t h e   D e s e r t   W a t e r   A g e n c y   p e r   c a p i t a   w a t e r   u s e a g e . " ) ; 
 
                                         } 
 
             } 
             f u n c t i o n   C l e a r F o r m ( f o r m )     { 
             f o r m . b a t h t o t a l . v a l u e   =   " " ; 
             f o r m . t o i l e t d a y . v a l u e   =   " " ; 
             f o r m . f a u c e t d a y . v a l u e   =   " " ; 
             f o r m . l a u n d r y d a y . v a l u e   =   " " ; 
             f o r m . d i s h w a s h e r d a y . v a l u e   =   " " ; 
             f o r m . d i s h d a y . v a l u e   =   " " ; 
             f o r m . l a w n d a y . v a l u e   = " " ; 
             f o r m . o t h e r d a y . v a l u e   =   " " ; 
             f o r m . i n d o o r d a y . v a l u e   =   " " ; 
             f o r m . o u t d o o r d a y . v a l u e   =   " " ; 
             f o r m . t o t a l d a y . v a l u e   =   " " ; 
             f o r m . t o t a l m o n t h . v a l u e   =   " " ; 
             f o r m . t o t a l y e a r . v a l u e   =   " " ; 
             f o r m . D W A d a y . v a l u e   =   " " ; 
             f o r m . D W A m o n t h . v a l u e   =   " " ; 
             f o r m . D W A y e a r . v a l u e   =   " " ; 
             f o r m . u s e a g e . v a l u e   =   " " ; 
             f o r m . s h o w e r s . v a l u e = " " ; 
             f o r m . b a t h s . v a l u e = " " ; 
             f o r m . p e o p l e . v a l u e = " " ; 
             f o r m . t o i l e t f l u s h . v a l u e = " " ; 
             f o r m . f a u c e t . v a l u e = " " ; 
             f o r m . f a u c e t m i n . v a l u e = " " ; 
             f o r m . d i s h w a s h e r . v a l u e = " " ; 
             f o r m . l a u n d r y . v a l u e = " " ; 
             f o r m . d i s h h a n d . v a l u e = " " ; 
             f o r m . c a r h a n d . v l a u e   =   " " ; 
             f o r m . d i s h m i n . v a l u e = " " ; 
             f o r m . l a w n . v a l u e = " " ; 
             f o r m . l a w n m i n . v a l u e = " " ; 
             f o r m . o t h e r . v a l u e = " " ; 
             f o r m . s h o w e r m i n . v a l u e = " " ; 
 
             } 
