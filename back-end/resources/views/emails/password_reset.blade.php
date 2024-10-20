<!DOCTYPE html>
<html>
<head>
    <title>Reset Password</title>
</head>
<body>
    <p>Bonjour {{ $name }},</p>
    <p>Cliquez sur le bouton ci-dessous pour réinitialiser votre mot de passe:</p>
    <a href="{{ env('FRONTEND_URL') }}/reset-password?token={{ $token }}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: blue; text-decoration: none; border-radius: 5px;">
        Réinitialiser mot de passe
    </a>
    <p>Si vous n'avez pas demandé de réinitialisation de mot de passe, veuillez ignorer cet email.</p>
</body>
</html>
